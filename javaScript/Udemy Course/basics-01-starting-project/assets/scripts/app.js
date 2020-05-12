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

function writeToLog(operationIdentifier,prevResult,operationNumber)
{
    const logEntry ={
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: currentResult
    };
    logEnteries.push(logEntry);
    console.log(logEnteries);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput('+',initialResult,enteredNumber);
  writeToLog('Add', initialResult, enteredNumber);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-',initialResult,enteredNumber);
  writeToLog('Subtract', initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*',initialResult,enteredNumber);
  writeToLog('Multiply', initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/',initialResult,enteredNumber);
  writeToLog('Divide', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
