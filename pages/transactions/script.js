import { getData } from "../../modules/http";
import { createHeader, reloadTransactions } from "../../modules/ui";

const user = JSON.parse(localStorage.getItem('user'))

const tbody = document.querySelector('tbody')
createHeader()

getData('/transactions?user_id=' + user.id)
    .then(res => {
        reloadTransactions(res.data, tbody, 'full')
    })

