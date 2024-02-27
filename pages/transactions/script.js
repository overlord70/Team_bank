import { createHeader, reloadTransactions } from "../../modules/ui";

const tbody = document.querySelector('tbody')

createHeader()
reloadTransactions([1,2,3], tbody, 'full')
