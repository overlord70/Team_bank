import moment from 'moment'
function getRGB() {
    function randomize() {
        return Math.floor(Math.random() * 255)
    }

    let r = randomize()
    let g = randomize()
    let b = randomize()

    return `rgb(${r}, ${g}, ${b})`
}
export function reload(arr, place) {
    place.innerHTML = ''

    for (const item of arr) {
        let div_1 = document.createElement('div')
        let h3 = document.createElement('h3')
        let p = document.createElement('p')

        div_1.classList.add('card_visa')
        div_1.style.background = `linear-gradient(60deg, ${getRGB()}, ${getRGB()}, ${getRGB()})`
        h3.innerHTML = item.name
        p.innerHTML = item.currency

        div_1.append(h3, p)
        place.append(div_1)
    }
}

export function reloadTransactions(arr, place, size) {
    place.innerHTML = ''

    let tempArr = []
    if (size === 'small') tempArr = arr.slice(0, 7)
    else if (size === 'full') tempArr = arr

    for(let item of tempArr.reverse()) {
        let tr = document.createElement('tr')
        let idView = document.createElement('td')
        let walletView = document.createElement('td')
        let categoryView = document.createElement('td')
        let sumView = document.createElement('td')
        let daysAgoView = document.createElement('td')

        place.append(tr)
        tr.append(idView, walletView, categoryView, sumView, daysAgoView)

        idView.innerHTML = item.id
        walletView.innerHTML = item.wallet.name
        categoryView.innerHTML = item.category
        sumView.innerHTML = item.total
        console.log(item.created_at);
        daysAgoView.innerHTML = moment(item.created_at, "YYYYMMDD, h:mm").fromNow()
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

    email.classList.add("user_mail")
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
    icon.style.cursor = 'pointer'

    icon.onclick = () => {
        localStorage.removeItem('user')
        location.assign('/pages/signin/')
    }

    return header
}


export function toaster(text, type) {
    const custom_alert = document.createElement('div')
    const time_bar = document.createElement('div')

        custom_alert.classList.add('toaster', `toaster_${type}`)
        custom_alert.classList.add('toaster-anim')
        time_bar.classList.add('time_bar')
        custom_alert.innerHTML = text

        custom_alert.append(time_bar)

        document.body.append(custom_alert)

        setTimeout(() => {
            custom_alert.remove()
        }, 5000)
}