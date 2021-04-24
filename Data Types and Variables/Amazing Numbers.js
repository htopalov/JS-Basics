function amazingNumbers(num){
    let result = 0;
    num = num.toString();
    for (let i = 0; i < num.length; i++) {
        result += Number(num[i]);
    }
    if (result.toString().includes('9')) {
        console.log(num + " Amazing? True");
    }
    else
    {
        console.log(num + " Amazing? False");
    }
}

amazingNumbers(123);