let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 10);
}

function compareGuesses(humanGuess, computerGuess, targetNumber) {
    const humanDifference = Math.abs(targetNumber - humanGuess);
    const computerDifference = Math.abs(targetNumber - computerGuess);

    if (humanDifference <= computerDifference) {
        return true;
    } else {
        return false;
    }
}
function updateScore(winner) {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}
function advanceRound() {
    currentRoundNumber++;
}
function getAbsoluteDistance(number1, number2) {
    return Math.abs(number1 - number2);
}

function compareGuesses(humanGuess, computerGuess, targetNumber) {
    if (humanGuess < 0 || humanGuess > 9) {
        alert('O número deve estar entre 0 e 9');
        return;
    }

    const humanDifference = getAbsoluteDistance(targetNumber, humanGuess);
    const computerDifference = getAbsoluteDistance(targetNumber, computerGuess);

    return humanDifference <= computerDifference;
}
