var arr = [{
    firstName: 'Daniel',
    surname: 'Beckham'
}, {
    firstName: 'David',
    surname: 'Craig'
}]
var arr2 = arr.map(function (el){
    return Object.values(el);
})

console.log(arr2);