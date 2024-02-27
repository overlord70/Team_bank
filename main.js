import { reload } from "/modules/cards_reload/ui.js";
import { createHeader } from "/modules/index.js";
let body = document.querySelector('.header')
createHeader(body)
let rel = document.querySelector('.reload')
let array = [
    {
        type: 'Visa',
        Money: 'RUB'
    },
    {
        type: 'Visa',
        Money: 'RUB'
    },
    {
        type: 'Visa',
        Money: 'RUB'
    },
    {
        type: 'Visa',
        Money: 'RUB'
    }
]
reload(array, rel)