'use strict'

// add
function add(x,y) {
  return x + y;
}

// subtract
function subtract(x,y) {
  return x - y;
}

// multiply
function multiply(x,y) {
  return x * y;
}

// divide
function divide(x,y) {
  return x / y;
}

// equal
function equal(fun) {
  return fun;
}

// body
const body = document.querySelector('body');
const mainContainer = document.createElement('div');
body.appendChild(mainContainer);

// h1
const h1 = document.createElement('h1');
h1.textContent = 'Calculator';
body.prepend(h1);

// calculator container
const calculatorContainer = document.createElement('div');
calculatorContainer.className = 'calc-container';
mainContainer.appendChild(calculatorContainer);

// display screen
const display = document.createElement('div');
display.className = 'display-screen';
display.textContent = 10;
calculatorContainer.appendChild(display);

// calculator functions
const functionsContainer = document.createElement('div');
functionsContainer.className = 'functions-container';
calculatorContainer.appendChild(functionsContainer);

const clearFunction = document.createElement('div');
clearFunction.className = 'functions';
clearFunction.textContent = 'C';
functionsContainer.appendChild(clearFunction);

const negateFunction = document.createElement('div');
negateFunction.className = 'functions';
negateFunction.textContent = '+/-';
functionsContainer.appendChild(negateFunction);

const percentFunction = document.createElement('div');
percentFunction.className = 'functions';
percentFunction.textContent = '%';
functionsContainer.appendChild(percentFunction);

// calculator operators
const operatorContainer = document.createElement('div');
operatorContainer.className = 'operator-container';
calculatorContainer.appendChild(operatorContainer);

const divisionOperator = document.createElement('div');
divisionOperator.textContent = '÷';
divisionOperator.className = 'operators';
operatorContainer.appendChild(divisionOperator);

const multiplicationOperator = document.createElement('div');
multiplicationOperator.textContent = '×';
multiplicationOperator.className = 'operators';
operatorContainer.appendChild(multiplicationOperator);

const subtractionOperator = document.createElement('div');
subtractionOperator.textContent = '-';
subtractionOperator.className = 'operators';
operatorContainer.appendChild(subtractionOperator);

const additionOperator = document.createElement('div');
additionOperator.textContent = '+';
additionOperator.className = 'operators';
operatorContainer.appendChild(additionOperator);

const equalOperator = document.createElement('div');
equalOperator.textContent = '=';
equalOperator.className = 'operators';
operatorContainer.appendChild(equalOperator);

// calculator inputs
const inputContainer = document.createElement('div');
inputContainer.className = 'input-container';
calculatorContainer.appendChild(inputContainer);

function createNumber(num) {
  const number = document.createElement('div');
  number.className = 'numbers';
  number.textContent = `${num}`
  inputContainer.appendChild(number);
}

for (let i = 9; i >= 1; i --) {
  console.log(`Testing ${i}`)
  createNumber(i)
}