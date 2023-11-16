function rollDice() {
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;
    return { die1, die2, total: die1 + die2 };
}

function updateDisplay(rollResult) {
    document.getElementById("die1").src = `img/${rollResult.die1}.png`;
    document.getElementById("die2").src = `img/${rollResult.die2}.png`;
}

function playCraps() {
    const startButton = document.getElementById("start");
    const continueButton = document.getElementById("continue");
    const outcome = document.getElementById("outcome");

    startButton.hidden = true;
    continueButton.hidden = false;

    const result = rollDice();
    updateDisplay(result);

    if (result.total === 7 || result.total === 11) {
        outcome.textContent = "You win!";
    } else if (result.total === 2 || result.total === 3 || result.total === 12) {
        outcome.textContent = "You lose.";
    } else {
        outcome.textContent = `Roll again, point is ${result.total}.`;
    }
}

document.getElementById("start").addEventListener("click", playCraps);
document.getElementById("continue").addEventListener("click", playCraps);
