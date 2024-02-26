let form = document.forms.add_cardForm

form.onsubmit = (e) => {
    e.preventDefault()

    let namecard = document.querySelector("input[name='namecard']").value;
    let currency = document.querySelector("select[name='currency']").value;
    let total = document.querySelector("input[name='total']").value;

    let fm = new FormData(form)
    let user = {
        id: Math.random(),
        name: namecard,
        currency: currency,
        balance: total,
        created_at: new Date().getHours() + ":" + new Date().getMinutes(),
        updated_at: new Date().getHours() + ":" + new Date().getMinutes(),
    }

    fm.forEach((value, key) => {
        user[key] = value
    })

    localStorage.setItem("user", JSON.stringify(user))
    console.log(user);
}

