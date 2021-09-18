"use strict";

// GLOBALS

let displayData = [];
let operand1 = null;
let operand2 = null;
let currentOperator = null;
let n = null;

// OPERATORS

// Add Function
function add(x, y) {
  return x + y;
}

// Subtract Function
function subtract(x, y) {
  return x - y;
}

// Multiply Function
function multiply(x, y) {
  return x * y;
}

// Divide Function
function divide(x, y) {
  if (y == 0) {
    return "What you talkin' 'bout, Willis?";
  } else {
    return x / y;
  }
}

// Equal Function
function equal() {
  if (operand1 != null) {
    let operandStr = `${displayData.join("")}`;
    console.log(operandStr);
    operand2 = parseFloat(operandStr);
    operand2 = parseFloat(operand2.toPrecision(3));
    console.table(operand1, operand2);
    console.log(typeof operand1);
    console.log(typeof operand2);
    console.log(currentOperator);
    console.log(operate(currentOperator, operand1, operand2));
    let res = operate(currentOperator, operand1, operand2)
    console.log(res)
    if (typeof res == "number") {
      res = res.toPrecision(8);
      console.log(res);
      console.log(`res type: ${typeof res}`);
      n = parseFloat(res);
      n = n.toString();
      if (n.length > 8) {
        n = Number(n);
        n = n.toExponential(5);
      }
      console.log(typeof n);
      console.log("this is n", n);
      display.textContent = n;
      if (display.textContent.length > 7) {
        display.style.fontSize = "58px";
      }
      displayData = [n];
      operand1 = null;
      operand2 = null;
      console.log(displayData);
      return n;
    } else {
      return display.textContent = res;
    }

  }
}

// Operate Function
function operate(func, num1, num2) {
  if (typeof func(num1, num2) == "string") {
    return `bruh`;
  } else {
    return func(num1, num2);
  }
}

// DOM

// Body
const body = document.querySelector("body");
const mainContainer = document.createElement("div");
body.appendChild(mainContainer);

// Header
const h1 = document.createElement("h1");
h1.textContent = "Calculator";
body.prepend(h1);

// Calculator Container
const calculatorContainer = document.createElement("div");
calculatorContainer.className = "calc-container";
mainContainer.appendChild(calculatorContainer);

// Calculator Display Screen
const display = document.createElement("div");
display.className = "display-screen";
display.textContent = 0;
calculatorContainer.appendChild(display);

// Display Function
function displayNumbers(arr, mod) {
  // if ( arg.length > 8) {
  //   // display only up to 8 chars
  //   arg.toExponential();
  // }
  // display.textContent = `${displayData.join("")}`;
  mod.textContent = arr;
}

// Calculator Functions Container
const functionsContainer = document.createElement("div");
functionsContainer.className = "functions-container";
calculatorContainer.appendChild(functionsContainer);

// Clear Function
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
  n = null;
});

// Negate Function
const negateFunction = document.createElement("div");
negateFunction.className = "functions";
negateFunction.textContent = "+/-";
negateFunction.id = "negateBtn";
functionsContainer.appendChild(negateFunction);
document.getElementById("negateBtn").addEventListener("click", function () {
  // if negative has not already been applied...
  // set number as negative
  console.log(displayData);
  if (!displayData.includes("-")) {
    display.textContent = `-${display.textContent}`;
    displayData.unshift("-");
    console.log(displayData);
  } else {
    displayData.shift();
    display.textContent = `${displayData.join("")}`;
    console.log(displayData);
  }
});

// Percent Function
const percentFunction = document.createElement("div");
percentFunction.className = "functions";
percentFunction.textContent = "%";
percentFunction.id = "percentBtn";
functionsContainer.appendChild(percentFunction);
document.getElementById("percentBtn").addEventListener("click", function () {
  // if % has not already been applied...
  // set number as decimal
  console.log(displayData);
  displayData = [`${parseFloat(displayData.join("") / 100).toPrecision(4)}`];
  console.log(`After % Value: ${displayData}`);
  let displayScreen = displayData[0];
  // displayScreen = Number(displayScreen)
  // console.log(typeof(displayScreen))
  displayScreen = parseFloat(displayScreen);
  console.log(typeof displayScreen);
  console.log(displayScreen);
  displayData[0] = displayScreen;

  if (displayScreen.length > 9) {
    console.log(`Length of displayScreen: ${displayScreen.length}`);
    // console.log('length of display screen',displayScreen.length)
    displayScreen = displayScreen.toString();
    displayScreen = Number(displayScreen);
    displayData = [displayScreen.toExponential()];
    console.log(displayData);
    display.style.fontSize = "58px";

    displayNumbers(displayData, display);
  } else {
    // display.textContent = `${displayData.join("") / 100}`;
    displayNumbers(displayData, display);
  }

  console.log(displayData);
});

// CALCULATOR OPERATORS

// Operator Container
const operatorContainer = document.createElement("div");
operatorContainer.className = "operator-container";
calculatorContainer.appendChild(operatorContainer);

// Division Operation
const divisionOperator = document.createElement("div");
divisionOperator.textContent = "÷";
divisionOperator.className = "operators";
divisionOperator.id = "divisionBtn";
operatorContainer.appendChild(divisionOperator);
document.getElementById("divisionBtn").addEventListener("click", function () {
  if (operand1 != null) {
    equal();
  }
  displayNumbers(displayData.join(""), display);
  let operandStr = `${displayData.join("")}`;
  operand1 = parseFloat(operandStr);
  operand1 = parseFloat(operand1.toPrecision(3));
  displayData = [];
  currentOperator = divide;
});

// Multiplication Operation
const multiplicationOperator = document.createElement("div");
multiplicationOperator.textContent = "×";
multiplicationOperator.className = "operators";
multiplicationOperator.id = "multiplyBtn";
operatorContainer.appendChild(multiplicationOperator);
document.getElementById("multiplyBtn").addEventListener("click", function () {
  if (operand1 != null) {
    equal();
  }
  displayNumbers(displayData.join(""), display);
  let operandStr = `${displayData.join("")}`;
  operand1 = parseFloat(operandStr);
  operand1 = parseFloat(operand1.toPrecision(3));
  displayData = [];
  currentOperator = multiply;
});

// Subtraction Operation
const subtractionOperator = document.createElement("div");
subtractionOperator.textContent = "-";
subtractionOperator.className = "operators";
subtractionOperator.id = "differenceBtn";
operatorContainer.appendChild(subtractionOperator);
document.getElementById("differenceBtn").addEventListener("click", function () {
  console.log(`Operand 1's value: ${operand1}`);
  if (operand1 != null) {
    equal();
  }
  displayNumbers(displayData.join(""), display);
  let operandStr = `${displayData.join("")}`;
  operand1 = parseFloat(operandStr);
  operand1 = parseFloat(operand1.toPrecision(3));
  displayData = [];
  currentOperator = subtract;
});

// Addition Operation
const additionOperator = document.createElement("div");
additionOperator.textContent = "+";
additionOperator.className = "operators";
additionOperator.id = "sumBtn";
operatorContainer.appendChild(additionOperator);
document.getElementById("sumBtn").addEventListener("click", function () {
  if (operand1 != null) {
    equal();
  }
  displayNumbers(displayData.join(""), display);
  let operandStr = `${displayData.join("")}`;
  operand1 = parseFloat(operandStr);
  operand1 = parseFloat(operand1.toPrecision(3));
  displayData = [];
  currentOperator = add;
});

// Equals Operation
function equalOperator(parent) {
  const equalFunction = document.createElement("div");
  equalFunction.className = "operators";
  equalFunction.textContent = "=";
  equalFunction.id = "equalBtn";
  parent.appendChild(equalFunction);
}
equalOperator(operatorContainer);
document.getElementById("equalBtn").addEventListener("click", equal);

// CALCULATOR INPUTS

// Digits Container
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
    if (n != null) {
      displayData = [];
      n = null;
    }

    if (displayData.length > 7) {
      display.style.fontSize = "60px";
    }
    if (displayData.length < 9) {
      displayData.push(e.target.textContent);
      console.log(`${e.target.textContent} clicked.`);
      console.log(`Current items in display array: ${displayData}`);
      displayNumbers(displayData.join(""), display);
    }
  });
});
