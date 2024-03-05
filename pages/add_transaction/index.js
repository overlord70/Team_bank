import { getData } from "../../modules/http";

document.addEventListener("DOMContentLoaded", function () {
    const form = document.forms.transactionAdd;
    const select = document.querySelector('#wallet')
    const total_inp = document.querySelector('#total')
    const user = JSON.parse(localStorage.getItem('user'))
    let wallets = []
    let selected_wallet = null

    getData('/wallets?user_id=' + user.id)
        .then(res => {
            console.log({res});
            for(let item of res.data) {
                let opt = new Option(`${item.name}`, item.id)

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

        if(+val > +selected_wallet.balance) {
            e.target.style.border = "2px solid red"   
        } else {
            e.target.style.border = "2px solid blue"   
        }

    }



    form.onsubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(form);
        const transaction = {
            id: Math.random(),
            wallet: formData.get("wallet"),
            category: formData.get("category"),
            description: formData.get("description"),
            total: formData.get("total"),
            created_at: new Date().toLocaleTimeString(),
            updated_at: new Date().toLocaleTimeString(),
        };

        // localStorage.setItem("user", JSON.stringify(user));

        console.log(user);

        alert(`Транзакция успешно добавлена:\n${JSON.stringify(user, null, 2)}`);
    }
})