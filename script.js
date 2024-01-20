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

// declares the winner of the round using a string
function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === 'Paper') === computerSelection ||
    (playerSelection === 'Rock') === computerSelection ||
    (playerSelection === 'Scissors') === computerSelection
  ) {
    return `you win, ${playerSelection} beats ${computerSelection}`;
  } else if (
    (computerSelection === 'Paper') === playerSelection ||
    (computerSelection === 'Rock') === playerSelection ||
    (computerSelection === 'Scissors') === playerSelection
  ) {
    return `you lose ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === computerSelection) {
    return `draw`;
  }
}

//
//
//
//
console.log(playRound(playerSelection(), computerSelection));

// best-of-five game that keeps score and reports a winner or loser at the end.
// function game() {

// }
