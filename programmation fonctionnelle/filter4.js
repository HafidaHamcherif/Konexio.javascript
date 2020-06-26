function isEven(num){
    return num % 2 == 0;
}

var arr = [1, 2, 3, 4];
var arr2 = arr.filter(function (elem){
    return isEven(elem);
});
console.log(arr2);