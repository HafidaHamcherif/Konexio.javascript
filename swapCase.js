function swapCase(str){
    var result = "";
    for(var i=0; i < str.length;i++){
        if(str[i] === str[i].toLowerCase()){
            result += str[i].toUpperCase(); 
            
        }
        else if(str[i] === str[i].toUpperCase()){
            result += str[i].toLowerCase(); 
            
        }
    }
    return result;
}
console.log(swapCase('Hello Word'));
console.log(swapCase('Hello-LOL'));
console.log(swapCase('Konexio Developer!'));







