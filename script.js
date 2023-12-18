function getComputerChoice() {
  let rockPaperScissor = ['Rock', 'Paper', 'Scissor'];

  let randomlyReturnRPS =
    rockPaperScissor[Math.floor(Math.random() * rockPaperScissor.length)];

  return randomlyReturnRPS;
  // randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
}

console.log(getComputerChoice());

function playerSelection() {
  let playerWord = prompt('enter Rock, Paper or Scissors');

  let playerWordCaseInsen = playerWord.toLowerCase();
  return (
    playerWordCaseInsen.charAt(0).toUpperCase() + playerWordCaseInsen.slice(1)
  );

  /*
		Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation)
	*/
}
console.log(playerSelection());

// maybe need a function
// function computerSelection() {}

function playRound(playerSelection, computerSelection) {
  // your code here!
  //
}

// const playerSelection = 'rock';
// const computerSelection = getComputerChoice();
//
function game() {
  /* 
	best-of-five game that keeps score and reports a winner or loser at the end.

	*/
}

// call playRound function 5 times in a row.
