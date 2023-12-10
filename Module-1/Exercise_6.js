'use strict'

const choice = confirm("Should I calculate square root?")
const target = document.getElementById('target');

if (choice) {
    const num = prompt("Enter a number:")
    if (num >= 0) {
        target.innerHTML = `The square root of ${num} is ${Math.sqrt(num)}`;
    }

    else {
        target.innerHTML = `Negative number, unable to calculate square root!`
    }
} else {
    target.innerHTML = "Square root not calculated as requested"
}