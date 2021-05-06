//Declarations

//Main

computerPlay();

//Functions
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function computerPlay() {
  let compSelection = getRandomIntInclusive(0, 2);

  switch (compSelection) {
    case 0:
      console.log('rock');
      break;
    case 1:
      console.log('paper');
      break;
    case 2:
      console.log('scissors');
      break;
  }
}


