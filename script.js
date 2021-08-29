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
display.className = "display-screen";
display.textContent = 10;
calculatorContainer.appendChild(display);

// operators
const divisionOperator = document.createElement('div');
divisionOperator.textContent = "/"
divisionOperator.className = "operators";
calculatorContainer.appendChild(divisionOperator)

const multiplicationOperator = document.createElement('div');
multiplicationOperator.textContent = "*"
multiplicationOperator.className = "operators";
calculatorContainer.appendChild(multiplicationOperator);

const subtractionOperator = document.createElement('div');
subtractionOperator.textContent = "-"
subtractionOperator.className = "operators";
calculatorContainer.appendChild(subtractionOperator)

const additionOperator = document.createElement('div');
additionOperator.textContent = "+"
additionOperator.className = "operators";
calculatorContainer.appendChild(additionOperator)

const equalOperator = document.createElement('div');
equalOperator.textContent = "="
equalOperator.className = "operators";
calculatorContainer.appendChild(equalOperator)
// function operatorButton(parentNode, operator){
//   parentNode.appendChild(operator)
// }




// function operatorsColumn(){
//   for (let i = 0; i < 3; i++){
//     operatorButton(calculatorContainer, operator);
//     console.log(i);
//   }

// }
// operatorsColumn();