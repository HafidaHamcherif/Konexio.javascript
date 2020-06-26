var arr = [{
    firstName: 'David',
    surname: 'Beckham'
}, {
    firstName: 'James',
    surname: 'Corden'
}, {
    firstName: 'Daniel',
    surname: 'Craig'
}, {
    firstName: 'Graham',
    surname: 'Norton'
}];

var arr2= arr.filter(function(elem){
    return elem.firstName == 'Daniel';
});

console.log(arr2);

var letter = 'lol hhaa lol haa';
console.log(letter.substr(5,9));