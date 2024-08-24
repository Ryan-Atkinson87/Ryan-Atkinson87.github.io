let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// return a random number between 0 and 9
function generateTarget() {
  return Math.floor(Math.random() * 10);
}
// Test generateTarget()
// console.log(generateTarget());

// take param userGuess, compGuess and secretTarget
// determines a winner by whoever is closest
// returns true if user wins
function compareGuesses(userGuess, computerGuess, secretTarget) {
    let userAway = secretTarget - userGuess;
    const computerAway = secretTarget - computerGuess;
    if (userAway < 0) {
        userAway = userAway * -1;
    }
    if (computerAway < 0) {
        computerAway = computerAway * -1;
    }
    if (userAway <= computerAway) {
        return true;
    } else {
        return false
    }
}

// Test compareGuesses:
// console.log(compareGuesses(3, 4, 4));

// takes param string representing winner
// increases the score variables humanScore, computerScore
function updateScore(winner) {
    if (winner === 'human') {
    humanScore ++;
  } else if (winner === 'computer') {
    computerScore ++;
  }
}

// Test updateScore:
// console.log(updateScore('computer'));
// console.log(humanScore);
// console.log(computerScore);

// increases the value of currentRoundNumber by 1
function advanceRound() {
    currentRoundNumber ++;
}

// Test advanceRound
// advanceRound();
// console.log(currentRoundNumber);
