var arr = [{
    firstName: 'Daniel',
    surname: 'Beckham'
}, {
    firstName: 'David',
    surname: 'Craig'
}]

var arr2 = arr.map(function (el){
    full = el.firstName +' '+ el.surname;
    var obj = {
        fullName: full
    };
    return obj;
})
console.log(arr2);



