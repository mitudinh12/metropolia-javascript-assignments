'use strict'

const nameList = ["GG", "HH", "EE", "BB"];
function concat(array) {
    let concatResult = '';
    for (let name of array) {
        concatResult += name;
    }
    return concatResult;
}

document.querySelector('#target').innerHTML = concat(nameList)