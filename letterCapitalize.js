function letterCapitalize(sentence){
    var arr = sentence.split();
    //console.log(arr);
    for(i=0; i < arr.length ; i++){
        var current = arr[i];
        var firstletter = current.substring(0,1);
        //console.log(firstletter);
        firstletter = firstletter.toUpperCase();
        //console.log(firstletter);
        var rest = current.substring(1);
        //console.log(rest);
        var full = firstletter + rest;
        //console.log(full);
        arr[i] = full;
        //console.log(arr);
    }
    var final = arr.join('');
    console.log(final);
}

letterCapitalize('bring your umbrella');