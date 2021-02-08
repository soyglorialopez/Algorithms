'use strict'

let a , b
for(let j = 1; j < array.length; j++){
    let n = array[j];
    b = j;
   for( let i = j - 1; i < array.length; i++){
    if(n > array[i]){
           n = array[i]
            b = i
     };
    };
   a = array[j - 1]
   array[j - 1] = n
   array[b] = a

};
