/*var arr = ['pan', 'top', 'pal', 'tool'];
var arr2= arr.reverse().map(function (el){
    return el + ' ';
});
console.log(arr2);*/

var arr = ['pan', 'top', 'pal', 'tool'];
var arr2 = arr.map(function(elem){
    return elem.split('').reverse().join('');
});

console.log(arr2);
