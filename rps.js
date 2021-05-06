//Declarations
let playerSelection;
let computerSelection;

//Main
playerSelection = window.prompt('Enter \'rock\', \'paper\', or \'scissors\'');
computerSelection = computerPlay();
playerSelection = playerSelection.toLowerCase(playerSelection);

console.log(playerSelection);
console.log(computerSelection);

playRound(playerSelection, computerSelection);

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

function playRound (playerSelection, computerSelection) {
  if(playerSelection === computerSelection){
    console.log('Tie game!');
    //break;
  } else if(playerSelection === 'rock' && computerSelection === 'scissors') {
    console.log('Rock beats Scissors! You win!');
    //break;
  } else if(playerSelection === 'rock' && computerSelection === 'paper') {
    console.log('Paper beats Rock! Computer wins!');
    //break;
  } else if(playerSelection === 'paper' && computerSelection === 'rock') {
    console.log('Paper beats Rock! You win!');
    //break;
  } else if(playerSelection === 'paper' && computerSelection === 'scissors') {
    console.log('Scissors beat Paper! Computer wins!');
    //break;
  } else if(playerSelection === 'scissors' && computerSelection === 'paper') {
    console.log('Scissors beat Paper! You win!');
    //break;
  } else if(playerSelection === 'scissors' && computerSelection === 'rock') {
    console.log('Rock beats Scissors! Computer wins!');
    //break;
  }
}


