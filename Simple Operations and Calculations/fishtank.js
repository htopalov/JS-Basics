function waterQuantity(length, width, heigh, percentage){
    let totalVolume = length * width * heigh;
    let liters = totalVolume * 0.001;
    let pr = percentage*0.01; 
    console.log((liters*(1- pr)).toFixed(3));
}

waterQuantity(85,75,47,17);