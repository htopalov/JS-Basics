function foodPrice(dogCount, animalsCount){

    let a = dogCount * 2.50;
    let b = animalsCount * 4;
    let sum = a+ b;
    console.log(`${sum.toFixed(2)} lv.`);
}

foodPrice(2,4);