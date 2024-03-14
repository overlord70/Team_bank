import { getData } from "../../modules/http"
import { createHeader, reload } from "../../modules/ui"
let user = JSON.parse(localStorage.getItem('user'))

createHeader()

let wrap = document.querySelector('.reload')
let add = document.querySelector('.add')

getData('/wallets?user_id=' + user.id)
    .then(res => {
        if(res.status === 201 || res.status === 200) {
            reload(res.data, wrap)
            wrap_reload.append(add)
        }
    })

