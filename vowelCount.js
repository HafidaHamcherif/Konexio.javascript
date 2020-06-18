function vowelCount(str){
    var arr = str.split();
    var voyel = ['a','e','i','o','u','y'];
    var result = 0;
    for(i=0; i < voyel.length; i++){
        for(pas=0; pas < str.length; pas++){
            if(voyel[i] === str[pas] ){
                result++;
            }
        }
    }
    console.log(result);

}

vowelCount('hello');
vowelCount('Konexio');

//faire deux boucle 
//if dans une boucle
