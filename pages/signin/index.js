import { getData, postData } from '../../modules/http'
import { toaster } from '../../modules/ui'

const form = document.forms.namedItem('signin')

form.onsubmit = (e) => {
    e.preventDefault()

    const user = {}

    const fm = new FormData(e.target)

    fm.forEach((val, key) => user[key] = val)

    const {email, password} = user

    if(email && password) {
        getData('/users?email=' + email)
            .then((res) => {
                const [res_user] = res.data

                if(!res_user) {
                    toaster('Такого пользователя не существует')    
                    return
                }
                if(res_user.password !== password) {
                    toaster('Не верный пароль!')    
                    return
                }
                
                delete res_user.password

                localStorage.setItem("user", JSON.stringify(res_user))
                location.assign('/')
            })
        }
    }