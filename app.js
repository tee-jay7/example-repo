// Source: https://ghs.currencyrate.today/convert/amount-50-to-usd.html
const DOLLAR_RATE = 6.2551

const dollarToCedi =(amount)=>{
    const cediAmount = amount * DOLLAR_RATE
    return cediAmount.toFixed(2)
}

console.log(dollarToCedi(50));
