import { createHeader } from "../../modules/index.js"

let add = document.querySelector('.add')
let body = document.body
let wrap = document.querySelector('.wrap')

view_cards(body, wrap, add)

function view_cards(main_place, place, btn) {
    main_place.innerHTML = ""

    let header = createHeader()
    let div = box()

    let cont = div.querySelector('.cont')

    main_place.append(header, place)
    place.append(div)
    cont.append(btn)

    btn.onclick = () => {
        window.location.href = "dobavte_stranitsu.html"
    }
}

function box() {
    let cont = document.createElement('div')
    cont.classList.add('cont')
    let h1 = document.createElement('h1')
    h1.innerHTML = 'Мои кошельки'
    let p = document.createElement('p')
    p.innerHTML = 'alexadams@google.com'
    let div = document.createElement('div')
    div.classList.add('all')

    for (let i = 0; i < 7; i++){
        let box = document.createElement('div')
        
        box.classList.add('ex')

        div.append(h1, p, cont)
        cont.append(box)
    }
    return div
}