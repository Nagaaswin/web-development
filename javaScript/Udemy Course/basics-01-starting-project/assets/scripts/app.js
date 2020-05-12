const defaultResult = 0;

let currentResult = defaultResult;
let logEnteries = [];

// Gets input from inputField
function getUserNumberInput() {
  return parseInt(userInput.value);
}

//Generates and Writes output
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // From vendor File
}

function writeToLog(operationIdentifier, prevResult, operationNumber) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: currentResult,
  };
  logEnteries.push(logEntry);
  console.log(logEnteries);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();

  if (
    (calculationType != 'Add' &&
      calculationType != 'Subtract' &&
      calculationType != 'Multiply' &&
      calculationType != 'Divide') ||
    !enteredNumber
  ) {
    return;
  }
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === 'Add') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if (calculationType === 'Subtract') {
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if (calculationType === 'Multiply') {
    currentResult *= enteredNumber;
    mathOperator = '*';
  } else if (calculationType === 'Divide') {
    currentResult /= enteredNumber;
    mathOperator = '/';
  }
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber);
}

function add() {
  calculateResult('Add');
}

function subtract() {
  calculateResult('Subtract');
}

function multiply() {
  calculateResult('Multiply');
}

function divide() {
  calculateResult('Divide');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
