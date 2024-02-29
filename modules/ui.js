export function reload(arr, place) {
    place.innerHTML = ''
    for (const item of arr) {
        let div_1 = document.createElement('div')
        let h3 = document.createElement('h3')
        let p = document.createElement('p')
        div_1.classList.add('card_visa')
        div_1.style.background = item.background
        h3.innerHTML = item.type
        p.innerHTML = item.Money
        div_1.append(h3, p)
        place.append(div_1)
    }
}

export function reloadTransactions(arr, place, size) {
    place.innerHTML = ''

    let tempArr = []
    if (size === 'small') tempArr = arr.slice(0, 7)
    else if (size === 'full') tempArr = arr

    for(let item of tempArr) {
        let tr = document.createElement('tr')
        let idView = document.createElement('td')
        let walletView = document.createElement('td')
        let categoryView = document.createElement('td')
        let sumView = document.createElement('td')
        let daysAgoView = document.createElement('td')

        place.append(tr)
        tr.append(idView, walletView, categoryView, sumView, daysAgoView)

        idView.innerHTML = item.id
        walletView.innerHTML = item.wallet
        categoryView.innerHTML = item.category
        sumView.innerHTML = item.sum
        daysAgoView.innerHTML = item.daysAgo + ' дней назад'
    }
}

export function createHeader() {
    let header = document.createElement('header')
    let box = document.createElement('div')
    let box_l = document.createElement('div')
    let box_r = document.createElement('div')
    let glavnaya = document.createElement('a')
    let koshelek = document.createElement('a')
    let akcii = document.createElement('a')
    let email = document.createElement('a')
    let icon = document.createElement('img')

    box.classList.add('box')
    box_l.classList.add('box_l')
    box_r.classList.add('box_r')
    icon.classList.add('icon')
    glavnaya.classList.add('glavnaya')
    koshelek.classList.add('koshelek')
    akcii.classList.add('akcii')
    icon.classList.add('icon')

    document.body.prepend(header)
    header.append(box)
    box.append(box_l, box_r)
    box_l.append(glavnaya, koshelek, akcii)
    box_r.append(email, icon)

    glavnaya.href = "/"
    koshelek.href = "/pages/wallets/"
    akcii.href = "/pages/transactions/"


    glavnaya.innerHTML = 'Главная'
    koshelek.innerHTML = 'Мои кошельки'
    akcii.innerHTML = "Мои транзакции"
    email.innerHTML = 'alexadams@google.com'
    icon.src = "../../public/log-out (1) 1.png"

    icon.onclick = () => {
        let btn = document.createElement('button')
        btn.classList.add('btn')
        btn.innerHTML = 'Выйти'
        box_r.appendChild(btn);

    }

    return header
}


export function toaster(text) {
    const custom_alert = document.createElement('div')

        custom_alert.classList.add('error')
        custom_alert.innerHTML = text

        document.body.append(custom_alert)

        setTimeout(() => {
            custom_alert.remove()
        }, 3000)
}