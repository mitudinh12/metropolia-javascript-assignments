const dogNames = []
for (let i = 0; i < 6; i++ ) {
    dogNames.push(prompt("Enter a dog's name:"))
}
dogNames.sort()
dogNames.reverse();
for (const name of dogNames) {
    document.getElementById('target').innerHTML += `<li>${name}</li>`
}
