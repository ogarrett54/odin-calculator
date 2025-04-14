// TODO:
// Add keyboard support
// Fix multiple operators bug
// Handle premature equals
// Support operations after equals

// Global state variables
let firstNum = "";
let operator;
let secondNum = "";

// Selectors and event listeners
// Display
const display = document.querySelector(".display");

// Inputs
const zero = document.querySelector("#num-0");
zero.addEventListener("click", () => updateDisplay(zero));

const one = document.querySelector("#num-1");
one.addEventListener("click", () => updateDisplay(one));

const two = document.querySelector("#num-2");
two.addEventListener("click", () => updateDisplay(two));

const three = document.querySelector("#num-3");
three.addEventListener("click", () => updateDisplay(three));

const four = document.querySelector("#num-4");
four.addEventListener("click", () => updateDisplay(four));

const five = document.querySelector("#num-5");
five.addEventListener("click", () => updateDisplay(five));

const six = document.querySelector("#num-6");
six.addEventListener("click", () => updateDisplay(six));

const seven = document.querySelector("#num-7");
seven.addEventListener("click", () => updateDisplay(seven));

const eight = document.querySelector("#num-8");
eight.addEventListener("click", () => updateDisplay(eight));

const nine = document.querySelector("#num-9");
nine.addEventListener("click", () => updateDisplay(nine));

const neg = document.querySelector("#neg");
neg.addEventListener("click", () => changeSign());

const decimal = document.querySelector("#decimal");
decimal.addEventListener("click", () => {
  if (!operator && !firstNum.includes(".")) {
    updateDisplay(decimal);
  } else if (operator && !secondNum.includes(".")) {
    updateDisplay(decimal);
  }
});

// Operators
const plus = document.querySelector("#add");
plus.addEventListener("click", () => updateDisplay(plus));

const minus = document.querySelector("#sub");
minus.addEventListener("click", () => updateDisplay(minus));

const mult = document.querySelector("#mult");
mult.addEventListener("click", () => updateDisplay(mult));

const div = document.querySelector("#div");
div.addEventListener("click", () => updateDisplay(div));

// Evaluator
const equals = document.querySelector("#equals");
equals.addEventListener("click", () => updateDisplay(equals));

// Deletors
const ac = document.querySelector("#clear");
ac.addEventListener("click", () => clear());

const del = document.querySelector("#del");
del.addEventListener("click", () => backspace());

// Calculations
function add(a, b) {
  return Number(a) + Number(b);
}

function subtract(a, b) {
  return Number(a) - Number(b);
}

function multiply(a, b) {
  return Number(a) * Number(b);
}

function divide(a, b) {
  if (b == 0) {
    return "YOU FOOL!";
  } else {
    return Number(a) / Number(b);
  }
}

function evaluate(op, a, b) {
  if (op === "+") {
    return add(a, b);
  } else if (op === "-") {
    return subtract(a, b);
  } else if (op === "*") {
    return multiply(a, b);
  } else if (op === "/") {
    return divide(a, b);
  }
}

function changeSign() {
  if (!operator && firstNum) {
    firstNum = String(Number(firstNum) * -1);
    display.textContent = firstNum;
  } else if (!operator && !firstNum) {
    firstNum += "-";
    display.textContent = firstNum;
  } else if (operator && secondNum) {
    secondNum = String(Number(secondNum) * -1);
    display.textContent = secondNum;
  } else if (operator && !secondNum) {
    secondNum += "-";
    display.textContent = secondNum;
  }
}

// DOM interaction
function updateDisplay(button) {
  console.log(button);
  if (button.classList.contains("input")) {
    if (!operator) {
      firstNum += button.textContent;
      display.textContent = firstNum;
    } else if (operator) {
      secondNum += button.textContent;
      display.textContent = secondNum;
    }
  } else if (button.classList.contains("operator")) {
    if (!operator) {
      operator = button.textContent;
    } else if (operator) {
      firstNum = evaluate(operator, firstNum, secondNum);
      display.textContent = firstNum;
      secondNum = "";
    }
  } else if (button.classList.contains("evaluate")) {
    result = evaluate(operator, firstNum, secondNum);
    display.textContent = result;
    firstNum = "";
    secondNum = "";
    operator = "";
  }
}

function clear() {
  firstNum = "";
  secondNum = "";
  operator = "";
  display.textContent = "0";
}

function backspace() {
  if (!operator) {
    firstNum = firstNum.slice(0, firstNum.length - 1);
    if (!firstNum) {
      display.textContent = 0;
    } else {
      display.textContent = firstNum;
    }
  } else if (operator && secondNum) {
    secondNum = secondNum.slice(0, secondNum.length - 1);
    if (!secondNum) {
      display.textContent = 0;
    } else {
      display.textContent = secondNum;
    }
  }
}
