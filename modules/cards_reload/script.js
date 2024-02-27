import { reload } from "./ui.js";
import { createHeader } from "../index.js";
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
