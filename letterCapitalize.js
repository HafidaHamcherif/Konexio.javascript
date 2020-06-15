/*function letterCapitalize(sentence){
    var arr = sentence.split('');
    console.log(arr);
    for(var i = 0; i < arr.lenght ; i++){
        var to = arr[i];
        var letter = to.substring(0,1);
        letter = letter.toUpperCase();
        var rest = to.substring(1);
        var full = letter + rest;
        arr[i] = full;
    }
    var final = arr.join('');
    return final;
}
var result = letterCapitalize("what a wonderful world");
console.log(result);*/
// not finished

function letterCapitalize(sentence){
    var arr = sentence.split(' ');
    return sentence.substr(0, 1).toUpperCase() + sentence.substr(1,sentence.lenght).toLowerCase()
}
var result = letterCapitalize("what a wonderful world");
console.log(result);

// not finished