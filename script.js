"use strict";

// global variables

let displayData = [];
let operand1 = 0;
let operand2 = 0;
let currentOperator = null;

// add
function add(x, y) {
  return x + y;
}

// subtract
function subtract(x, y) {
  return x - y;
}

// multiply
function multiply(x, y) {
  return x * y;
}

// divide
function divide(x, y) {
  return x / y;
}

// equal
function equal(fun) {
  return fun;
}

// operate function

function operate(func, num1, num2) {
  return func(num1, num2);
}

// body
const body = document.querySelector("body");
const mainContainer = document.createElement("div");
body.appendChild(mainContainer);

// h1
const h1 = document.createElement("h1");
h1.textContent = "Calculator";
body.prepend(h1);

// calculator container
const calculatorContainer = document.createElement("div");
calculatorContainer.className = "calc-container";
mainContainer.appendChild(calculatorContainer);

// display screen
const display = document.createElement("div");
display.className = "display-screen";
display.textContent = 0;
calculatorContainer.appendChild(display);

// calculator functions
const functionsContainer = document.createElement("div");
functionsContainer.className = "functions-container";
calculatorContainer.appendChild(functionsContainer);

function clearFunction(parent) {
  const clearFunction = document.createElement("div");
  clearFunction.className = "functions";
  clearFunction.textContent = "C";
  clearFunction.id = "clearBtn";
  parent.appendChild(clearFunction);
}

clearFunction(functionsContainer);
document.getElementById("clearBtn").addEventListener("click", function () {
  display.textContent = 0;
  displayData = [];
});

// negate operation
const negateFunction = document.createElement("div");
negateFunction.className = "functions";
negateFunction.textContent = "+/-";
negateFunction.id = "negateBtn";
functionsContainer.appendChild(negateFunction);
document.getElementById("negateBtn").addEventListener("click", function () {
  display.textContent = `-${display.textContent}`;
  let operandStr = `${displayData.join("")}`;
  operand1 = parseFloat(operandStr);
  operand1 = parseFloat(operand1.toPrecision(3));
  displayData = [];
  currentOperator = divide;
});

const percentFunction = document.createElement("div");
percentFunction.className = "functions";
percentFunction.textContent = "%";
functionsContainer.appendChild(percentFunction);

// calculator operators

// operator container
const operatorContainer = document.createElement("div");
operatorContainer.className = "operator-container";
calculatorContainer.appendChild(operatorContainer);

// division operation
const divisionOperator = document.createElement("div");
divisionOperator.textContent = "÷";
divisionOperator.className = "operators";
divisionOperator.id = "divisionBtn";
operatorContainer.appendChild(divisionOperator);
document.getElementById("divisionBtn").addEventListener("click", function () {
  display.textContent = "÷";
  let operandStr = `${displayData.join("")}`;
  operand1 = parseFloat(operandStr);
  operand1 = parseFloat(operand1.toPrecision(3));
  displayData = [];
  currentOperator = divide;
});

// multiplication operation
const multiplicationOperator = document.createElement("div");
multiplicationOperator.textContent = "×";
multiplicationOperator.className = "operators";
multiplicationOperator.id = "multiplyBtn";
operatorContainer.appendChild(multiplicationOperator);
document.getElementById("multiplyBtn").addEventListener("click", function () {
  display.textContent = "×";
  let operandStr = `${displayData.join("")}`;
  operand1 = parseFloat(operandStr);
  operand1 = parseFloat(operand1.toPrecision(3));
  displayData = [];
  currentOperator = multiply;
});

// subtraction operation
const subtractionOperator = document.createElement("div");
subtractionOperator.textContent = "-";
subtractionOperator.className = "operators";
subtractionOperator.id = "differenceBtn";
operatorContainer.appendChild(subtractionOperator);
document.getElementById("differenceBtn").addEventListener("click", function () {
  display.textContent = "-";
  let operandStr = `${displayData.join("")}`;
  operand1 = parseFloat(operandStr);
  operand1 = parseFloat(operand1.toPrecision(3));
  displayData = [];
  currentOperator = subtract;
});



// addition operation
const additionOperator = document.createElement("div");
additionOperator.textContent = "+";
additionOperator.className = "operators";
additionOperator.id = "sumBtn";
operatorContainer.appendChild(additionOperator);
document.getElementById("sumBtn").addEventListener("click", function () {
  display.textContent = "+";
  let operandStr = `${displayData.join("")}`;
  operand1 = parseFloat(operandStr);
  operand1 = parseFloat(operand1.toPrecision(3));
  displayData = [];
  currentOperator = add;
});

// equals operation
function equalOperator(parent) {
  const equalFunction = document.createElement("div");
  equalFunction.className = "operators";
  equalFunction.textContent = "=";
  equalFunction.id = "equalBtn";
  parent.appendChild(equalFunction);
}

equalOperator(operatorContainer);
document.getElementById("equalBtn").addEventListener("click", function () {
  let operandStr = `${displayData.join("")}`;
  operand2 = parseFloat(operandStr);
  operand2 = parseFloat(operand2.toPrecision(3));
  display.textContent = operate(currentOperator, operand1, operand2);
  displayData = [];
});

// calculator inputs
const inputContainer = document.createElement("div");
inputContainer.className = "input-container";
calculatorContainer.appendChild(inputContainer);

function createNumber(num, size) {
  const number = document.createElement("div");
  number.className = "numbers";
  number.textContent = `${num}`;
  number.style.width = `${size}px`;
  inputContainer.appendChild(number);
}

for (let i = 9; i >= 1; i--) {
  createNumber(i);
  if (i == 1) {
    createNumber(".", 81.66);
    createNumber("", 81.66);
    createNumber("0", 81.66);
  }
}

const numberBtns = document.querySelectorAll(".numbers");
const numbersArray = Array.from(numberBtns);

numbersArray.forEach((e) => {
  e.addEventListener("click", function (e) {
    displayData.push(e.target.textContent);
    if (displayData.length > 7) {
      display.style.fontSize = "60px";
    }
    if (displayData.length <= 9) {
      display.textContent = `${displayData.join("")}`;
    }
  });
});
