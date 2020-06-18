function passwordGen(num){
    var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var result =" ";
    for(i = 0; i < num ; i++){
        var random = Math.floor(Math.random()*arr.length);
        var letter = arr[random];
        var result = result + letter ;
    }
    console.log(result);
        if (num < 6  || num > 15){
        console.log('erreur');
    }
}
passwordGen(8);



