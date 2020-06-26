function letterCapitalize(sentence){
    var arr = sentence.split('');
    console.log(arr);
    for(var i=0; i < arr.length; i++){
       var arr = arr[i].toUpperCase();
       console.log(arr[i]);
       
    }  
}

letterCapitalize("bring your umbrella");