//Declarations
let playerSelection;
let computerSelection;

//Main
playerSelection = window.prompt('Enter \'rock\', \'paper\', or \'scissors\'');
computerSelection = computerPlay();

console.log(playerSelection);
console.log(computerSelection);

//Functions
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function computerPlay() {
  switch (getRandomIntInclusive(0, 2)) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }  
}

/*function playRound (playerSelection, computerSelection) {

}*/


