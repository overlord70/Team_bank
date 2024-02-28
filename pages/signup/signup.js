const regForm = document.forms.regForm
const regInps = regForm.querySelectorAll('input')

const dbUrl = 'http://localhost:8080'

regForm.onsubmit = (e) => {
    e.preventDefault()

    let errors = 0
    regInps.forEach(inp => {
        if (inp.value.trim() === '') {
            ++errors
        }
    })

    if (errors === 0) {
        let fm = new FormData(regForm)
        let user = {}

        fm.forEach((value, key) => {
            user[key] = value
        })

        localStorage.setItem("user", JSON.stringify(user))

        let result = 0
        fetch(dbUrl + '/users')
            .then(res => res.json())
            .then(res => {
                res.forEach(item => {
                    if (item.email === user.email) {
                        ++result
                    }
                })

                if (result === 0) {
                    fetch(dbUrl + '/users', {
                        "method": "post",
                        "body": JSON.stringify(user),
                        "headers": {
                            "Content-Type": "application/json"
                        }
                    })
                        .then(res => {
                            if (res.status === 200 || res.status === 201) {
                                location.assign('/pages/signin/')
                            } else {
                                alert('Что-то пошло не так')
                            }
                        })
                } else {
                    alert('Пользователь с таким email уже существует')
                }
            })
    }
}