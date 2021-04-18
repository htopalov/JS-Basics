function area(x1,y1,x2,y2){
 x1 = Number(x1);
 y1 = Number(y1);
 x2 = Number(x2);
 y2 = Number(y2);
 let length = Math.abs(x1-x2);
 let width = Math.abs(y1-y2);
 console.log((length*width).toFixed(2));
 console.log((length*2 + width*2).toFixed(2));
}