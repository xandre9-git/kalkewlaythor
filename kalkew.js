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
h1.textContent = 'Calculate';
h1.style.margin = 'auto';
h1.style.marginBottom = '2.5%';
h1.style.width = '25%';
h1.style.textAlign = 'center';
body.prepend(h1);

// calculator container
const calculatorContainer = document.createElement('div');
calculatorContainer.style.width = '25%';
calculatorContainer.style.height = '468px';
calculatorContainer.style.backgroundColor = 'black';
calculatorContainer.style.margin = 'auto';
calculatorContainer.style.borderRadius = '10px';
calculatorContainer.className = 'calc-container'
mainContainer.appendChild(calculatorContainer);

// display screen
const display = document.createElement('div');
display.style.color = 'grey';
// display.style.width = ;
display.style.height = '68px';
display.style.zIndex = '+1';
calculatorContainer.appendChild(display);
