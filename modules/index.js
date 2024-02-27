

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
