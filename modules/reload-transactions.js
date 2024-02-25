let arr = [
    {
        id: 838383,
        wallet: 'VISA',
        category: "на машину",
        sum: 4400000,
        daysAgo: 4
    },
]

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
