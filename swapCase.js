/*function swapCase(str){
    var arr = str.toUpperCase();
    console.log(arr);
    var rev = arr.split('');
    console.log(rev);
    var letter = rev[0].toLowerCase();
    console.log(letter);
    var letter2 = rev[6].toLowerCase();
    console.log(letter2);
    var letter3 = rev[7].toLowerCase();
    console.log(letter3);
    var letter4 = rev[8].toLowerCase();
    console.log(letter4);
}
swapCase('Hello-LOL');*/

var str = 'Hello Word';
var arr = str.split(' ');
for(i=0; i < arr.length;i++){
    var rev = arr.reverse();
    console.log(rev);
    var letter = arr.join();
    var maj = letter.toUpperCase();
    console.log(maj);
}



