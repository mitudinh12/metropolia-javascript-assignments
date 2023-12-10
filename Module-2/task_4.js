'use strict'

const numberList = [];
let stop = false;

while (!stop) {
    const num = +prompt("Enter a number")
    if (num !== 0) {
        numberList.push(num);
    } else {
        stop = true;
    }
}

numberList.sort(function (a,b) {
    return b - a;
})
numberList.reverse()
for (num of numberList) {
    console.log(num);
}

