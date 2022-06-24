const select = document.querySelectorAll('select')
const input = document.querySelectorAll('input')
const API_URL = "https://api.exchangerate-api.com/v4/latest/USD" 
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
}
currency();
