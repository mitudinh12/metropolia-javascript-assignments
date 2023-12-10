function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

const target = document.getElementById('target');
while (true) {
    const dice = rollDice();
    target.innerHTML += `<li>${dice}</li>`
    if (dice === 6) {
        break
    }
}