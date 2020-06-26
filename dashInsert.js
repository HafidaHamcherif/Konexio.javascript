function dashInsert(str){
    var arr= str.split('');
    for(var i=0; i < arr.length;i++){
        if(Number(arr[i]) % 2 === 1 && Number(arr[i + 1] % 2)){
            arr.slice(i+1,0,1,'-');
        }
    }
    return arr.join('');
}

console.log(dashInsert('99946'));
console.log(dashInsert('56730'));