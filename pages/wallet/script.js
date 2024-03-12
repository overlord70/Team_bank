import {
    createHeader,
    toaster
} from "../../modules/ui";
import {
    getData,
    getSymbols,
    patch
} from "../../modules/http"
import VanillaTilt from "vanilla-tilt";
import axios from "axios";
import Chart from 'chart.js/auto';

const wallet_id = location.search.split('=').at(-1)

const card_name = document.querySelector('.card_name')
const card_balance = document.querySelector('.card_balance')
const card_back_name = document.querySelector('.card_back_name')
const card_currency = document.querySelector('.currency')
const form = document.forms.convert_form

let wallet

getData('/wallets/' + wallet_id)
    .then(res => {
        if (res.status === 200 || res.status === 201) {
            wallet = res.data

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

form.onsubmit = (e) => {
    e.preventDefault()

    let convert_to = new FormData(e.target).get('currency')

    axios.get(`https://api.apilayer.com/fixer/convert?to=${convert_to}&from=${wallet.currency}&amount=${wallet.balance}`, {
            redirect: 'follow',
            headers: {
                "apikey": import.meta.env.VITE_API_KEY
            }
        })
        .then(res => {
            console.log(res.data);
            patch('/wallets/' + wallet_id, {
                    balance: res.data.result,
                    currency: res.data.query.to
                })
                .then(res => {
                    card_balance.innerHTML = `${res.data.balance} ${res.data.currency}`
                    card_currency.innerHTML = res.data.currency
                })
        })
}
const dates = []
const totals = []

getData('/transactions?wallet_id=' + wallet_id)
    .then(res => {
        res.data.forEach(item => {
            let dateMin = item.created_at.split(',').at(0)
            const date = `${dateMin.slice(0, 4)}-${dateMin.slice(4, 6)}-${dateMin.slice(6)}`
            if (dates.length < 7) {
                dates.push(date)
            } else {
                dates.shift()
                dates.push(date)
            }

            if (totals.length < 7) {
                totals.push(item.total)
            } else {
                totals.shift()
                totals.push(item.total)
            }

        });
    })

let arr = ['2024-24-24', '2024-24-24', '2024-24-24', '2024-24-24']
const ctx = document.getElementById('myChart');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: dates,
        datasets: [{
            label: '# of Votes',
            data: totals,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});