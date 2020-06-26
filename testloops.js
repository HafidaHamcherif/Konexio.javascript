var arr = ['hafida','sanaa','nahil','sadek'];
for (i=0; i < arr.length; i++){
    arr[i] = arr[i].toUpperCase();
}
console.log(arr);

var grade = 'B';
console.log ('Voici la note');

switch (grade) {
  case 'A':
    console.log("Good job");    // Instructions à exécuter lorsque le résultat de l'expression (ici grade) équivaut à 'A'
    break;
  case 'B':
    console.log("Pretty good");  // Instructions à exécuter lorsque le résultat de l'expression (ici grade) équivaut à 'B'
    break;
  case 'C': console.log("Passed");  // Instructions à exécuter lorsque le résultat de l'expression (ici grade) équivaut à 'C'
  break;
  case 'D': console.log("Not so good");  // Instructions à exécuter lorsque le résultat de l'expression (ici grade) équivaut à 'D'
  break;
  case 'F': console.log("Failed");  // Instructions à exécuter lorsque le résultat de l'expression (ici grade) équivaut à 'F'
  break;
  default:  console.log("not rated");  // Instructions à exécuter lorsqu'aucune des valeurs ne correspond
}