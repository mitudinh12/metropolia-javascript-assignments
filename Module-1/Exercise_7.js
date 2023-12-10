'use strict'

const dicesNumber = prompt("How many dices to roll?");
let sum = 0;
for (let i=0; i < dicesNumber; i++ ) {
    const dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);
    sum += dice;
}

document.getElementById('target').innerHTML = `The sum of all dices is ${sum}`