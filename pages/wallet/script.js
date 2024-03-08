import { createHeader, toaster } from "../../modules/ui";
import { getData, getSymbols } from "../../modules/http"
import VanillaTilt from "vanilla-tilt";

const wallet_id =  location.search.split('=').at(-1)

const card_name = document.querySelector('.card_name')
const card_balance = document.querySelector('.card_balance')
const card_back_name = document.querySelector('.card_back_name')
const card_currency = document.querySelector('.currency')

getData('/wallets/' + wallet_id)
    .then(res => {
        console.log(res.data);
        if(res.status === 200 || res.status === 201) {
            card_name.innerHTML = res.data.name
            card_balance.innerHTML = `${res.data.balance} ${res.data.currency}`
            card_back_name.innerHTML = res.data.name
            card_currency.innerHTML = res.data.currency 
        } else {
            toaster('Card Load Error', 'error')
        }
    })

createHeader()

const card = document.querySelector('.card')
const select = document.querySelector('#currency')


card.onclick = () => {
    card.classList.toggle('flipped')
}

getSymbols()
    .then((symbols) => {
        for (let key in symbols) {
            let opt = new Option(`${key} - ${symbols[key]}`, key)

            select.append(opt)
        }
    })
