const participantNumbers = +prompt("Number of participants?");
let nameList = [];
for (let i = 0; i < participantNumbers; i++) {
    nameList.push(prompt("Enter the participant's name:"))
}

for (const name of nameList.sort()) {
    document.getElementById('target').innerHTML += `<li>${name}</li>`
}