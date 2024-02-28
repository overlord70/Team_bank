const signForm = document.forms.signForm
const singInps = signForm.querySelectorAll('input')

const dbUrl = 'http://localhost:8080'

let ls = JSON.parse(localStorage.getItem('user'))
singInps[0].value = ls.email

signForm.onsubmit = (e) => {
    e.preventDefault()

    let errors = 0
    singInps.forEach(inp => {
        if (inp.value.trim() === '') {
            ++errors
        }
    })

    if (errors === 0) {
        let fm = new FormData(signForm)
        let user = {}

        fm.forEach((value, key) => {
            user[key] = value
        })

        fetch(dbUrl + '/users')
            .then(res => res.json())
            .then(res => {
                let finded = ''
                res.find(item => {
                    if(item.email === user.email) {
                        finded = item
                    }
                })

                if(finded === '') {
                    alert('Пользователь не найден')
                } else {
                    if(finded.password === user.password) {
                        alert('Вы вошли в аккаунт!')
                    } else {
                        alert('Неправильный пороль!')
                    }
                }
            })
    }
}