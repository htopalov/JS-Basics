function price(tableCount,length,width){
    tableCount = Number(tableCount);
    length = Number(length);
    width = Number(width);
    let cover = tableCount*((length + 0.60)*(width + 0.60));
    let kare = tableCount*(length/2)*(length/2);
    let dollarsPrice = cover*7 + kare*9;
    console.log(dollarsPrice.toFixed(2) + " USD");
    console.log((dollarsPrice * 1.85).toFixed(2) + " BGN");
}

price(5,1.00,0.50);
price(10,1.20,0.65);