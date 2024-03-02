import { getSymbols, postData } from "../../modules/http"

const form = document.forms.add_cardForm
const select = form.querySelector('select')

getSymbols()
    .then((symbols) => {
        console.log('start');
        for(let key in symbols) {
            let opt = new Option(`${key} - ${symbols[key]}`, key)

            select.append(opt)
        }
    })

form.onsubmit = (e) => {
    e.preventDefault()

    let fm = new FormData(e.target)
    let wallet = {
        id: Math.random(),
        created_at: new Date().toLocaleDateString(),
        updated_at: new Date().toLocaleDateString(),
        user_id: JSON.parse(user)?.id
    }

    fm.forEach((value, key) => {
        wallet[key] = value
    })

    const {name, currency, balance} = wallet

    if(name && currency && balance) {
        postData('/wallets', wallet)
            .then(res => {
                if(res.status === 200 || res.status === 201) {
                    alert('Success')
                    location.assign('/pages/wallets/')
                }
            })
    }
}

