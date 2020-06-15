function simpleAdding(num , limit){
    for (var i = 0; i < limit; i++){
        (num += i); 
    }
    console.log(num);
}

simpleAdding(4,4); // 4 -> 10
simpleAdding(12, 12); //12 -> 78
simpleAdding(140, 140); // 140 -> 9870

/*var num = 12;
var limit = 12;
for (var i = 0; i < num; i++){
    (limit += i);
}

console.log(limit);*/