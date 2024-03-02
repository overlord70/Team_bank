import axios from 'axios'
import { getData, postData } from '../../modules/http'
import { toaster } from '../../modules/ui'
const form = document.forms.namedItem('signup')

form.onsubmit = (e) => {
    e.preventDefault()

    const user = {}

    const fm = new FormData(e.target)

    fm.forEach((val, key) => user[key] = val)

    const {email, name, surname, password} = user

    if(email && name && surname && password) {
        getData('/users?email=' + email)
            .then(res => {
                if(res.data.length > 0) {
                    toaster('Аккаунт уже существует')
                    return
                }
                postData('/users', user)
                    .then(res => {
                        if(res.status === 200 || res.status === 201) {
                            location.assign('/pages/signin/')
                        }
                    })

            })
    }
}