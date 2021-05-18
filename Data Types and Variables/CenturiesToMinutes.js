function converter(centuries){
    console.log(`${centuries} centuries = ${centuries * 100} years = ${Math.trunc(centuries * 365.2422 * 100)} days = ${Math.trunc(centuries * 365.2422 * 100) * 24} hours = ${Math.trunc(centuries * 100 * 365.2422) * 24 * 60} minutes`);
}

converter(1);
converter(5);