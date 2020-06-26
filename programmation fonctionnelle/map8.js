var arr = [{
    firstName: 'Daniel',
    surname: 'Beckham'
}, {
    firstName: 'David',
    surname: 'Craig'
}]

var arr2 = arr.map(function(el){
    el.fullName = el.firstName + ' '+ el.surname;
    return el;
})
console.log(arr2);
