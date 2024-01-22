// computer return randomly  either ‘Rock’, ‘Paper’ or ‘Scissors’.
function getComputerChoice() {
  let rockPaperScissor = ['Rock', 'Paper', 'Scissors'];

  let returnRandomlyWord =
    rockPaperScissor[Math.floor(Math.random() * rockPaperScissor.length)];

  return returnRandomlyWord;
}

// case-insensitive (so users can input rock, ROCK, RocK or any other variation)
function playerSelection() {
  let playerWord = prompt('enter Rock, Paper or Scissors');

  let playerWordCase = playerWord.toLowerCase();
  return playerWordCase.charAt(0).toUpperCase() + playerWordCase.slice(1);
}
const computerSelection = getComputerChoice();
//
//
//
//

// declares the winner of the round
function playRound(playerSelection, computerSelection) {
  // object storing who is beating, who
  let beatChoice = { Rock: 'Scissors', Scissors: 'Paper', Paper: 'Rock' };

  if (computerSelection === beatChoice[playerSelection]) {
    return `you win, ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === beatChoice[computerSelection]) {
    return `you lose ${computerSelection} beats ${playerSelection}`;
  } else if (computerSelection === playerSelection) {
    return `draw`;
  } else {
    return `You must input Rock, Paper, or Scissors`;
  }
}

//
//
//
//
console.log(playRound(playerSelection(), computerSelection));
console.log(playRound(playerSelection(), computerSelection));
console.log(playRound(playerSelection(), computerSelection));
console.log(playRound(playerSelection(), computerSelection));
console.log(playRound(playerSelection(), computerSelection));

// best-of-five game that keeps score and reports a winner or loser at the end.
// function game() {

// }
