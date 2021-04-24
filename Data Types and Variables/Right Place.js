function replaceMissingChar(string1, char,string2){
    let result = string1.replace('_', char);
    if (result == string2) {
        console.log('Matched');
    }
    else
    {
        console.log('Not Matched');
    }

}

replaceMissingChar('Str_ng', 'I', 'Strong');
replaceMissingChar('Str_ng', 'i', 'String');