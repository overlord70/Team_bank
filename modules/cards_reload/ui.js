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