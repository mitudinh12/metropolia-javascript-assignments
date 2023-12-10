const num1 = parseInt(prompt("Give the first number: "))
const num2 = parseInt(prompt("Give the second number: "))
const num3 = parseInt(prompt("Give the third number: "))

document.getElementById('sum').innerHTML = `The sum is ${num1+num2+num3}`
document.getElementById('product').innerHTML = `The product is ${num1*num2*num3}`
document.getElementById('average').innerHTML = `The average is ${(num1+num2+num3)/3}`





