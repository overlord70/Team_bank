import { createHeader, reload } from "../../modules/ui"

let wrap = document.querySelector('.reload')

createHeader()
reload([ {
        type: 'Visa',
        Money: 'RUB',
        background: 'linear-gradient(84.37deg, #D7816A 2.27%, #BD4F6C 92.26%)'
    }], wrap)
