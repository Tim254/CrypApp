const select = document.querySelectorAll('select')
const input = document.querySelectorAll('input')
const API_URL = "https://api.exchangerate-api.com/v4/latest/USD" 
let html = '';

async function currency() {
    const res = await fetch (API_URL)
    const data = await res.json();
    console.log(data)
    const arrKeys = Object.keys(data.rates)
    console.log(arrKeys)
}
currency();
