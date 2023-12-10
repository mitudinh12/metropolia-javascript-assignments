'use strict'

function even(array) {
    const evenNumber = [];
    for (let number of array) {
        if (number % 2 === 0) {
            evenNumber.push(number);
        }
    }
    return evenNumber;
}

let numberList = [34,54,65,34,90,44,67,24];
let evenList = even(numberList);

// document.getElementById('target').innerHTML = evenList;
console.log(evenList)