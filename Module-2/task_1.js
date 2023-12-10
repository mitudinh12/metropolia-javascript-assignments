'use strict'

let numberList = []
for (let i = 0; i < 5; i++) {
    let user_input = +prompt("Enter a number: ");
    numberList.push(user_input);
}
for (let i = 4; i >= 0; i--) {
    console.log(numberList[i])
}

