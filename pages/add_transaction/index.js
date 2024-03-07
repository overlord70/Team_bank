import moment from "moment";
import { getData, postData } from "../../modules/http";
import { patch } from "../../modules/http";
import { toaster } from "../../modules/ui";

document.addEventListener("DOMContentLoaded", function () {
    const form = document.forms.transactionAdd;
    const select = document.querySelector('#wallet')
    const total_inp = document.querySelector('#total')
    const user = JSON.parse(localStorage.getItem('user'))
    let wallets = []
    let selected_wallet = null

    getData('/wallets?user_id=' + user.id)
        .then(res => {
            for (let item of res.data) {
                let opt = new Option(`${item.name}`, item.id)

                if(res.data.indexOf(item) === 0) {
                    opt.selected = true
                    selected_wallet = item
                }

                select.append(opt)
            }

            wallets = res.data
        })

    select.onchange = (e) => {
        const id = e.target.value
        selected_wallet = wallets.find(el => el.id === id)
    }

    total_inp.onkeyup = (e) => {
        const val = e.target.value

        if (+val > +selected_wallet.balance) {
            e.target.classList.add('error_input')
        } else {
            e.target.classList.remove('error_input')
        }

    }


    form.onsubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(form);
        const transaction = {
            created_at: moment().format("YYYYMMDD, HH:m"),
            updated_at: new Date().toLocaleTimeString(),
            user_id: user.id,
        };
        formData.forEach((val, key) => transaction[key] = val)

        if (total_inp.value > 0 && !total_inp.classList.contains('error_input')) {
            selected_wallet.balance = +selected_wallet.balance - +total_inp.value

            transaction.wallet_id = selected_wallet.id 
            delete selected_wallet.id
            delete selected_wallet.user_id
            transaction.wallet = selected_wallet

            patch(`/wallets/${transaction.wallet_id}`, { balance: selected_wallet.balance })
                .then(res => {
                    if (res.status === 200 || res.status === 201) {
                        postData('/transactions', transaction)
                            .then(res => {
                                if (res.status === 200 || res.status === 201) {
                                    location.assign('/pages/transactions/')
                                }
                            })
                    }
                })
        } else {
            toaster('not enough money!', 'error')
        }
    }
})