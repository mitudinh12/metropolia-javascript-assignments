'use strict'

console.log("I'm printing to console!")

const name = prompt("What is your name?")
document.querySelector('#target').innerHTML = `Hello, ${name}`;