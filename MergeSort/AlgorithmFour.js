'use strict'
//Merge Sort 
function Merge(array, p, q, r) {
    let n1 = q - p + 1;
    let n2 = r - q;
    
    let left = []
    let Right = []

    for (let i = 0; i < n1; i++) {
        left[i] = array[p + i];
    };

    for (let j = 0; j < n2; j++) {
        Right[j] = array[q + j + 1];
    };


    let counter1 = 0;
    let counter2 = 0;
    let c = p 
    let k 
    for ( k = p; k < r; k++){
        if (left[counter1] <= Right[counter2] ) {
            array[k] = left[counter1]; 
            c++
            counter1++
        } else  if (left[counter1] >= Right[counter2]){
            array[k] = Right[counter2];
            c++
            counter2++
        };

    };

    while (counter1 < n1) {
        array[c] = left[counter1]
        counter1++
        c++
    }
    while (counter2 < n2) {
        array[c] = Right[counter2]
        counter2++
        c++ 
    }
};

function MergeSort(array, p, r) {
    debugger
    if (p < r) {
       let q = Math.floor((p + r) / 2);
        MergeSort(array, p, q);
        MergeSort(array, q + 1, r);
        Merge(array, p, q, r);
    };

};

let array = [9, 0, 8, 44];
MergeSort(array, 0, array.length - 1);
console.log(array)