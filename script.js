"use strict";



// GLOBALS

let displayData = ["0"];
let operand1 = null;
let operand2 = null;
let currentOperator = null;
let n = null;
let operatorStyles = document.getElementsByClassName("operators");
let functionStyles = document.getElementsByClassName("functions");
let numberStyles = document.getElementsByClassName("numbers");

let keyPressed = function(e){
  console.log(`${e.key} was pressed.`)
  if (e.key === 'c') {
    console.log(`The c key was pressed.`)
    clearIt();
  }

  
}

let numberInputs = function (e) {

  // let inputPressed = keyPressed;
  // console.log(inputPressed);

  if (n != null) {
    displayData = [];
    n = null;
  }
 
  // for (let i = 0; i < 11; i++){
  //   if (keyPressed == numberStyles[i].textContent) {
  //     console.log(numberStyles[i].textContent);
  //   }
  // }



  if (displayData.length < 9) {
    if (
      displayData[0] != "-" &&
      displayData[0] != 0 &&
      !displayData.includes(".")
    ) {
      displayData.push(e.target.textContent);
      console.log(`${e.target.textContent} clicked.`);
      console.log(`Current items in display array: ${displayData}`);
      displayNumbers(displayData.join(""), display);
    }

    else if (displayData[0] == "-" && e.target.textContent == ".") {
      console.log("Minus and decimal is now in the array.");
      displayData.push(e.target.textContent);
      displayNumbers(displayData.join(""), display);
    }

    else if (displayData[0] == "-" && e.target.textContent > 0) {
      if (displayData[1] == 0){
        displayData.splice(1,1);
        console.log(`${displayData.splice(1,1)} removed.`)
      }
      console.log("Minus and number is now in the array.");
      displayData.push(e.target.textContent);
      displayNumbers(displayData.join(""), display);
    }

    else if (displayData[0] == 0 && e.target.textContent != 0) {
      console.log("cheetos");
      if (displayData[1] != ".") {
        displayData.pop();
      }

      displayData.push(e.target.textContent);
      displayNumbers(displayData.join(""), display);
    } else if (displayData.includes(".") && e.target.textContent != ".") {
      displayData.push(e.target.textContent);
      console.log(`${e.target.textContent} clicked.`);
      console.log(`Current items in display array: ${displayData}`);
      displayNumbers(displayData.join(""), display);
    }

    console.log(`JavaScript is a powerful programming language.`);
    
    if (displayData[0] == ".") {
      displayData.unshift(0);
      displayNumbers(displayData.join(""), display);
    }   

  }


  
}

let clearIt = function () {
    for (let i = 0; i < operatorStyles.length; i++) {
      operatorStyles[i].style.color = "#a9a9a9";
      operatorStyles[i].style.backgroundColor = "#545454";
    }
    display.textContent = 0;
    displayData = [0];
    n = null;
    operand1 = null;
    operand2 = null;
  

}

window.addEventListener('keydown', keyPressed);

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
  for (let i = 0; i < operatorStyles.length; i++) {
    operatorStyles[i].style.color = "#a9a9a9";
    operatorStyles[i].style.backgroundColor = "#545454";
  }

  console.log(`Equal() displayData values: ${displayData}`);

  if (operand1 != null && displayData.length > 0) {
    let operandStr = `${displayData.join("")}`;
    console.log(`operandStr value: ${operandStr}`);
    operand2 = parseFloat(operandStr);
    operand2 = parseFloat(operand2.toPrecision(3));
    console.table(operand1, operand2);
    console.log(typeof operand1);
    console.log(typeof operand2);
    console.log(currentOperator);
    console.log(operate(currentOperator, operand1, operand2));
    let res = operate(currentOperator, operand1, operand2);
    console.log(res);

    if (typeof res == "number") {
      res = res.toPrecision(8);
      console.log(res);
      console.log(`res type: ${typeof res}`);
      n = parseFloat(res);
      n = n.toString();

      if (n.length > 9) {
        n = Number(n);
        n = n.toExponential(2);
      }

      console.log(typeof n);
      console.log("this is n", n);
      display.textContent = n;

      if (display.textContent.length > 8) {
        display.style.fontSize = "62px";
      }

      displayData = [n];
      operand1 = null;
      operand2 = null;
      console.log(displayData);
      return n;
    } else {
      return (display.textContent = res);
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
document.getElementById("clearBtn").addEventListener("click", clearIt);
document.getElementById("clearBtn").addEventListener("keydown", keyPressed)

// Negate Function
const negateFunction = document.createElement("div");
negateFunction.className = "functions";
negateFunction.textContent = "+/-";
negateFunction.id = "negateBtn";
functionsContainer.appendChild(negateFunction);
document.getElementById("negateBtn").addEventListener("click", function () {
  console.log(displayData);
  let numLength = displayData[0].toString();
  console.log(`At start length of displayData[0] is ${numLength.length}`)

  if (displayData.length >= 9 || displayData[0].toString().length >= 9) {
    display.style.fontSize = "58px";
  } else {
    display.style.fontSize = "62px";
  }
 
  if (displayData.length == 0) {
    console.log(`Bzkt`);
    displayData[0] = 0;
  }

  if (displayData[0] != "-") {
    if (n != null && n.indexOf("-") != -1) {
      displayData[0] = displayData[0] * -1;
      console.log(numLength);
      console.log(`Length of numLength: ${numLength.length}`);
      if (numLength.length >= 7) {
        console.log(`Firing`)
        displayData[0] = displayData[0].toExponential(2);
      }
      display.textContent = `${displayData.join("")}`;
    } else if (n > 0 || n == null) {
      displayData.unshift("-");
      display.textContent = `-${display.textContent}`;
      console.log(`- was unshifted.`)
      console.log(displayData);
    }

  } else if (displayData[0] == "-") {
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
  console.log(displayData);
  if (displayData) {
    displayData = [`${parseFloat(displayData.join("") / 100).toPrecision(4)}`];
    console.log(`After % Value: ${displayData}`);
    let displayScreen = displayData[0];
    displayScreen = parseFloat(displayScreen);
    console.log(typeof displayScreen);
    console.log(displayScreen);
    displayData[0] = displayScreen;
    displayScreen = displayScreen.toString();

    if (displayScreen.length > 8) {
      console.log(`Length of displayScreen: ${displayScreen.length}`);
      displayScreen = displayScreen.toString();
      displayScreen = Number(displayScreen);
      displayData = [displayScreen.toExponential(2)];
      console.log(displayData);
      display.style.fontSize = "62px";
      displayNumbers(displayData, display);
    } else {
      displayNumbers(displayData, display);
    }

    console.log(displayData);
  }
});

// CALCULATOR OPERATORS

// Math Operators Container
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
  for (let i = 0; i < operatorStyles.length; i++) {
    operatorStyles[i].style.color = "#a9a9a9";
    operatorStyles[i].style.backgroundColor = "#545454";
  }
  currentOperator = divide;
  operatorStyles[0].style.color = "#545454";
  operatorStyles[0].style.backgroundColor = "#a9a9a9";

  if (displayData.length > 0) {
    displayNumbers(displayData.join(""), display);
    let operandStr = `${displayData.join("")}`;
    operand1 = parseFloat(operandStr);
    console.log(`Operand1 value: ${operand1}`);
    displayData = [];
  }
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
    console.log(`Equal() fired.`);
  }
  for (let i = 0; i < operatorStyles.length; i++) {
    operatorStyles[i].style.color = "#a9a9a9";
    operatorStyles[i].style.backgroundColor = "#545454";
  }
  currentOperator = multiply;
  operatorStyles[1].style.color = "#545454";
  operatorStyles[1].style.backgroundColor = "#a9a9a9";
  console.log(`× clicked.`);
  console.log(displayData.length);
  if (displayData.length > 0) {
    displayNumbers(displayData.join(""), display);
    let operandStr = `${displayData.join("")}`;
    operand1 = parseFloat(operandStr);
    displayData = [];
  }
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
  for (let i = 0; i < operatorStyles.length; i++) {
    operatorStyles[i].style.color = "#a9a9a9";
    operatorStyles[i].style.backgroundColor = "#545454";
  }

  currentOperator = subtract;
  subtractionOperator.style.color = "#545454";
  subtractionOperator.style.backgroundColor = "#a9a9a9";
  if (displayData.length > 0) {
    displayNumbers(displayData.join(""), display);
    let operandStr = `${displayData.join("")}`;
    operand1 = parseFloat(operandStr);
    displayData = [];
  }
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
  for (let i = 0; i < operatorStyles.length; i++) {
    operatorStyles[i].style.color = "#a9a9a9";
    operatorStyles[i].style.backgroundColor = "#545454";
  }

  currentOperator = add;
  additionOperator.style.color = "#545454";
  additionOperator.style.backgroundColor = "#a9a9a9";
  if (displayData.length > 0) {
    displayNumbers(displayData.join(""), display);
    let operandStr = `${displayData.join("")}`;
    operand1 = parseFloat(operandStr);
    displayData = [];
  }
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

// Digits Input
const numberBtns = document.querySelectorAll(".numbers");
const numbersArray = Array.from(numberBtns);
numbersArray.forEach((e) => {
  e.addEventListener("click", numberInputs);
  e.addEventListener("keydown", numberInputs);
});
