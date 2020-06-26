function formatDate(date){
}
formatDate('2018-11-17');//=>'17/11/2018'
formatDate('1986-07-03');//=> '03/07/1986'
formatDate('1993-02-02')//=> '02/02/1993'

var date= '2018-11-17';
console.log(date);
var arr = date.split('');
console.log(arr);
arr[4]= '/'; 
arr[7] = '/';
var ret = arr.join();
console.log(ret);

console.log(arr);

/*Créer un fichier formatDate.js.En utilisant JavaScript, 
créer une fonction formatDate(date) qui prend en paramètre date qui est un string
au format aaaa-mm-jj et retourne la même date au format jj/mm/aaaa.*/