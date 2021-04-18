function priceForGreening(squareMetes){
    let price = (squareMetes * 7.61);
    let discount = price * 0.18;
    console.log(`The final price is: ${(price- discount).toFixed(2)} lv.`);
    console.log(`The discount is: ${discount.toFixed(2)} lv.`);
}

priceForGreening(540);