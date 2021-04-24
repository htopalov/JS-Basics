function money(distance,passengers,priceForLiter){
    let fuel = (distance / 100) * 7 + passengers * 0.1;
    console.log(`Needed money for that trip is ${(fuel * priceForLiter).toFixed(3)}lv.`);
}

money(260,9,2.49);
money(90, 14, 2.88);