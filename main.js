import { createHeader, reload } from "./modules/ui"

let body = document.querySelector('.header')
let rel = document.querySelector('.reload')



let array = [
    {
        type: 'Visa',
        Money: 'RUB',
        background: 'linear-gradient(84.37deg, #D7816A 2.27%, #BD4F6C 92.26%)'
    },
    {
        type: 'Visa',
        Money: 'RUB',
        background: 'linear-gradient(84.37deg, #5F0A87 2.27%, #A4508B 92.26%)'
    },
    {
        type: 'Visa',
        Money: 'RUB',
        background: 'linear-gradient(84.37deg, #20BF55 2.27%, #01BAEF 92.26%)'
    },
    {
        type: 'Visa',
        Money: 'RUB',
        background: 'linear-gradient(84.37deg, #380036 2.27%, #0CBABA 92.26%)'
    }
]

createHeader(body)
reload(array, rel)


const aboutuser = {
    name: document.querySelector('.user'),
    email: document.querySelector('.email'),
    head_mail: document.querySelector(".user_mail"),
    user_sn: document.querySelector(".user_sn")
}

let user = JSON.parse(localStorage.getItem('aboutuser'))

aboutuser.name.innerHTML = user.name
aboutuser.email.innerHTML = user.email
aboutuser.head_mail.innerHTML = user.email
aboutuser.user_sn.innerHTML = user.surname

console.log(user);