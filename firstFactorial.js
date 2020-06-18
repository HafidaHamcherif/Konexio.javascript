function firstFactorial(num){
    var factorielle = num;
    while(num > 1){
        num --;
        factorielle = factorielle * num;
    }
    return factorielle;
}
console.log(firstFactorial(4));
console.log(firstFactorial(8));

