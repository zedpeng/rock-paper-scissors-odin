
//Main
game();

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
    return 'Tie game!';
  } else if(playerSelection === 'rock' && computerSelection === 'scissors') {
    return 'Rock beats Scissors! You win!';
  } else if(playerSelection === 'rock' && computerSelection === 'paper') {
    return 'Paper beats Rock! Computer wins!';
  } else if(playerSelection === 'paper' && computerSelection === 'rock') {
    return 'Paper beats Rock! You win!';
  } else if(playerSelection === 'paper' && computerSelection === 'scissors') {
    return 'Scissors beat Paper! Computer wins!';
  } else if(playerSelection === 'scissors' && computerSelection === 'paper') {
    return 'Scissors beat Paper! You win!';
  } else if(playerSelection === 'scissors' && computerSelection === 'rock') {
    return 'Rock beats Scissors! Computer wins!';
  }
}

function game() {
  let playerSelection;
  let computerSelection;
  let gamesPlayed;
  let maxRounds = window.prompt('Please enter the number of rounds you want to play');
  let playerScore = 0;
  let computerScore = 0;
  let roundResult;

  maxRounds = parseInt(maxRounds);
  
  for(gamesPlayed = 0; gamesPlayed < maxRounds; gamesPlayed++) {
    playerSelection = window.prompt('Enter \'rock\', \'paper\', or \'scissors\'');
    computerSelection = computerPlay();
    playerSelection = playerSelection.toLowerCase(playerSelection);

    roundResult = playRound(playerSelection, computerSelection);

    if(roundResult.search('Tie') >= 0) {
      console.log(roundResult);
    } else if(roundResult.search('You win') >= 0) {
      playerScore++;
      console.log(roundResult);
    } else {
      computerScore++;
      console.log(roundResult);
    }
  }

  if(playerScore === computerScore) {
    console.log('Your Score: ' + playerScore + ' Computer Score: ' + computerScore + ' Tie Game!');
  } else if(playerScore > computerScore) {
    console.log('Your Score: ' + playerScore + ' Computer Score: ' + computerScore + ' You Win!');
  } else {
    console.log('Your Score: ' + playerScore + ' Computer Score: ' + computerScore + ' Computer Wins!')
  }
}


