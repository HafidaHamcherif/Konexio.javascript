var arr = [{
    firstName: 'Daniel',
    surname: 'Beckham'
}, {
    firstName: 'David',
    surname: 'Craig'
}]

var arr2 = arr.map(function (el){
    var obj = Object.assign({},el,{fullName:el});
    var rest = obj + Object.values(el);
    delete obj.firstName;
    delete obj.surname;
    return obj;
})
console.log(arr2);

