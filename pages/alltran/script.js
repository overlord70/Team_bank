function createElements() {
    let diva = document.createElement('div')

    let h1 = document.createElement("h1");
    h1.innerHTML = 'Мои транзакции'
    document.body.appendChild(diva);
    let span = document.createElement("span");
    span.innerHTML = "alexadams@gmail.com"
    diva.appendChild(h1);
    diva.appendChild(span)
    span.classList.add('span')
    diva.classList.add('d')
}

createElements();    