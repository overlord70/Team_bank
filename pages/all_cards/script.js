import { createHeader } from "../../modules/index.js"

let body = document.body
let wrap = document.querySelector('.wrap')

view_cards(body, wrap)

function view_cards(main_place, place) {
    main_place.innerHTML = ""

    let add = document.createElement('div')
    let cirlce = document.createElement('div')

    add.classList.add('add')
    cirlce.classList.add('circle')

    let header = createHeader()
    let div = box()

    let cont = div.querySelector('.cont')

    main_place.append(header, place)
    place.append(div)
    cont.append(add)
    add.append(cirlce)

    add.onclick = () => {
        window.location.href = "dobavte_stranitsu.html"
    }
}

function box() {
    let cont = document.createElement('div')
    cont.classList.add('cont')
    let div = document.createElement('div')
    div.classList.add('all')

    for (let i = 0; i < 7; i++){
        let box = document.createElement('div')
        
        box.classList.add('ex')

        div.append(cont)
        cont.append(box)
    }
    return div
}