import { getData } from "../../modules/http";
const user = JSON.parse(localStorage.getItem('user'))

let wallets = await getData('/wallets?user_id=' + user.id)
// console.log(wallets.data);
const select = document.querySelector('select')

for(let item of wallets.data) {
    let opt = new Option(item.name, item.name)
    select.append(opt)
}

let wallet = {}
select.onchange = (e) => {
    wallets.data.find(item => wallet = item.name === e.target.value)
}


document.addEventListener("DOMContentLoaded", function  () {
    const form = document.forms.transactionAdd;

    form.onsubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(form);
        const transaction = {
            created_at: new Date().toLocaleTimeString(),
            updated_at: new Date().toLocaleTimeString(),
            user_id: user.id
        };

        formData.forEach((val, key) => {
            transaction[key] = val
        })
    }
})