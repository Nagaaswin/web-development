const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(
    `${ROCK},${PAPER} or ${SCISSORS}?`,
    ''
  ).toUpperCase();

  if (selection != ROCK && selection != PAPER && selection != SCISSORS) {
    alert(
      `Entered a invalid input! So ${DEFAULT_USER_CHOICE} has been chosen for you!`
    );
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = function () {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;
/*if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK)
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
};*/

startGameBtn.addEventListener('click', function () {
  if (gameIsRunning) return;

  gameIsRunning = true;
  console.log('Game is Starting...');
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  const winner = getWinner(computerSelection, playerSelection);
  let message = `You picked ${playerSelection} and the computer picked ${computerSelection} therefore you`;
  if (winner === RESULT_DRAW) {
    message += ' had a draw.';
  } else if (winner === RESULT_PLAYER_WINS) {
    message += ' won.';
  } else {
    message += ' lost.';
  }
  alert(message);
  gameIsRunning = false;
});

//not related to the game
//Use of rest operator for n arguments
const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNan(number) ? 0 : number;
  }; // function inside a function
  let sum = 0;
  if (operation === 'ADD') {
    for (const num of numbers) {
      sum += num;
    }
  } else if (operation === 'SUBTRACT') {
    for (const num of numbers) {
      sum -= num;
    }
  }

  resultHandler(sum);
};

/*//Use of arguments keyword in function fo n aruguments
const subtractUp = function () {
  let sum = 0;
  for (const num of arguments) {
    // avoid using arguments.
    sum -= num;
  }
  return sum;
};*/

const showResult = (messageTxt, result) => {
  alert(messageTxt + ' ' + result);
};

combine(
  showResult.bind(this, 'The sum of adding all numbers'),
  'ADD',
  1,
  2,
  3,
  4,
  5
);
combine(
  showResult.bind(this, 'The sum of subtracting all numbers'),
  'SUBTRACT',
  5,
  67,
  845,
  34,
  6,
  34,
  6,
  34
);
