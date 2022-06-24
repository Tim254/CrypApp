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
    const convert = (i,j)=> {
        input[i].value = input[j].value * rates[select[i].value] / rates[select[j].value];
    }
    // console.log(rates[select[1].value])
    input[0].addEventListener('keyup', () => {
        input[1].value = input[0].value * rates[select[1].value] / rates[select[0].value];
    })
    input[1].addEventListener('keyup', () => {
        input[0].value = input[1].value  * rates[select[0].value] / rates[select[1].value];
    })
    select[0].addEventListener('change', () => {
        input[1].value = input[0].value * rates[select[1].value] / rates[select[0].value];
    })
    select[1].addEventListener('change', () => {
        input[0].value = input[1].value  * rates[select[0].value] / rates[select[1].value];
    })
}
currency();
