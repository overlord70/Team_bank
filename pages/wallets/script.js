import { getData } from "../../modules/http"
import { createHeader, reload } from "../../modules/ui"
createHeader()

let wrap = document.querySelector('.reload')

getData('/wallets')
    .then(res => {
        if(res.status === 201 || res.status === 200) {
            reload(res.data, wrap)
        }
    })

