document.addEventListener("DOMContentLoaded", currency)

const select = document.querySelectorAll('select')
const input = document.querySelectorAll('input')
const API_URL = "https://api.exchangerate-api.com/v4/latest/USD" 
const btc = document.getElementById('bitcoin')
const ltc = document.getElementById('litecoin')
const eth = document.getElementById('ethereum')
const doge = document.getElementById('dogecoin')
let html = '';

async function currency() {
    const response = await fetch (API_URL)
    const data = await response.json();
    console.log(data)
    const arrKeys = Object.keys(data.rates)
    const rates = data.rates;
    console.log(rates)
    arrKeys.map(item => {
        return html += `<option value=${item}>${item}</option>`;
    })
    // console.log(html);
    for(let i=0; i<select.length; i++){
        select[i].innerHTML = html;

    }
    const convert = (i,j)=> {
        input[i].value = input[j].value * rates[select[i].value] / rates[select[j].value];
    }
    // console.log(rates[select[1].value])
    input[0].addEventListener('keyup', () => convert(1,0))

    input[1].addEventListener('keyup', () =>convert(0,1) )

    select[0].addEventListener('change', () => convert(1,0))

    select[1].addEventListener('change', () => convert(0,1))
}
currency();

const livePrices = {
    "async": true,
    "scroosDomain": true,
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Cdogecoin&vs_currencies=usd",

    "method": "GET",
    "headers": {}
}
$.ajax(livePrices).done(response => {

    btc.innerHTML = response.bitcoin.usd;
    ltc.innerHTML = response.litecoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;
})
