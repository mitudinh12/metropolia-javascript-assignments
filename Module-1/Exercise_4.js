'use strict'

const studentName = prompt("What is your name?");
let printName = `Welcome ${studentName}, you are in class `;

//
const classes = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
//
let randomNum = Math.floor(Math.random() * 4);

switch(randomNum) {
    case 0:
        printName += classes[0];
        break
    case 1:
        printName += classes[1];
        break
    case 2:
        printName += classes[2];
        break
    case 3:
        printName += classes[3];
        break
}

document.querySelector('#target').innerHTML = printName;