/*exemple
var bdays = ['08-14', '10-04', '04-21'];
// we want a new array where the birthdays will be in the format: MM/DD
// the elem parameter will be each element from the original array
var bdays4 = bdays.map(function(elem) {
  return elem.replace('-', ':');
});
console.log(bdays4); // => ['08/14', '10/04', '04/21']*/

var arr = [1, 2, 3, 4];
var arr2 = arr.map(x => x + 1);
console.log(arr2);