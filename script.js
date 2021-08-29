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
calculatorContainer.appendChild(display);
