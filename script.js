'use strict'

// global variables

let displayData = [];

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

// operate

function operate(func, num1, num2) {
  return func(num1, num2);
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
display.textContent = 0;
calculatorContainer.appendChild(display);

// calculator functions
const functionsContainer = document.createElement('div');
functionsContainer.className = 'functions-container';
calculatorContainer.appendChild(functionsContainer);

function clearFunction(parent) {
  const clearFunction = document.createElement('div');
  clearFunction.className = 'functions';
  clearFunction.textContent = 'C';
  clearFunction.id = 'clearBtn';
  parent.appendChild(clearFunction);
}

clearFunction(functionsContainer);
document.getElementById('clearBtn').addEventListener('click', function(){
  display.textContent = 0;
  displayData = [];
});


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

function createNumber(num, size) {
  const number = document.createElement('div');
  number.className = 'numbers';
  number.textContent = `${num}`;
  number.style.width = `${size}px`;
  inputContainer.appendChild(number);
}

for (let i = 9; i >= 1; i --) {
  console.log(`Testing ${i}`)
  createNumber(i);
  if (i == 1) {
    createNumber('.', 81.66)
    createNumber('', 81.66)
    createNumber('0', 81.66)
  }
}

const numberBtns = document.querySelectorAll('.numbers');
console.log(numberBtns);

const numbersArray = Array.from(numberBtns);
console.log(numbersArray);

numbersArray.forEach((e) => {
  e.addEventListener("click", function(e){
    console.log(e.target.textContent);
    displayData.push(e.target.textContent);
    display.textContent = `${displayData.join('')}`;

});

});
