import { createHeader, reload } from "./modules/ui"
let user = JSON.parse(localStorage.getItem('user'))

let body = document.querySelector('.header')
let user_view = document.querySelector('#user')
let rel = document.querySelector('.reload')

createHeader(body)

user_view.innerHTML = `${user.name} ${user.surname}`

// reload(array, rel)