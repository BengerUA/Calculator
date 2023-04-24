const display = document.querySelector('.display');
const buttons = document.querySelector('.buttons');
const clearButton = document.querySelector('.clear');
const equalButton = document.querySelector('.equal');
let firstOperand = null;
let secondOperand = null;
let operator = null;
let result = null;
let decimalClicked = false;
function clearDisplay() {
display.textContent = '0';
firstOperand = null;
secondOperand = null;
operator = null;
result = null;
decimalClicked = false;
}
function calculate() {
if (operator === '+') {
result = parseFloat(firstOperand) + parseFloat(secondOperand);
} else if (operator === '-') {
result = parseFloat(firstOperand) - parseFloat(secondOperand);
} else if (operator === '*') {
result = parseFloat(firstOperand) * parseFloat(secondOperand);
} else if (operator === '/') {
result = parseFloat(firstOperand) / parseFloat(secondOperand);
} else if (operator === 'sqrt') {
result = Math.sqrt(parseFloat(firstOperand));
} else if (operator === '%') {
result = parseFloat(firstOperand) / 100 * parseFloat(secondOperand);
}
display.textContent = result.toFixed(2);
}
buttons.addEventListener('click', (event) => {
const button = event.target;
const value = button.value;
if (button.classList.contains('number')) {
if (operator === null) {
if (firstOperand === null) {
firstOperand = value;
} else {
firstOperand += value;
}
display.textContent = firstOperand;
} else {
if (secondOperand === null) {
secondOperand = value;
} else {
secondOperand += value;
}
display.textContent = secondOperand;
}
}
if (button.classList.contains('decimal')) {
if (!decimalClicked) {
decimalClicked = true;
if (operator === null) {
if (firstOperand === null) {
firstOperand = '0.';
} else {
firstOperand += '.';
}
display.textContent = firstOperand;
} else {
if (secondOperand === null) {
secondOperand = '0.';
} else {
secondOperand += '.';
}
display.textContent = secondOperand;
}
}
}
if (button.classList.contains('operator')) {
if (firstOperand !== null && secondOperand !== null) {
calculate();
firstOperand = result;
secondOperand = null;
operator = value;
decimalClicked = false;
} else if (firstOperand !== null) {
operator = value;
decimalClicked = false;
}
}
if (button.classList.contains('function')) {
if (firstOperand !== null) {
operator = value;
calculate();
firstOperand = result;
secondOperand = null;
decimalClicked = false;
}
}
if (button.classList.contains('clear')) {
clearDisplay();
}
if (button.classList.contains('equal')) {
if (firstOperand !== null&& secondOperand !== null && operator !== null) {
calculate();
firstOperand = result;
secondOperand = null;
operator = null;
decimalClicked = false;
}
}
});
document.addEventListener('keydown', (event) => {
if (event.key === 'Enter') {
event.preventDefault();
equalButton.click();
}
});
document.addEventListener('keydown', (event) => {
if (event.key === 'Escape') {
event.preventDefault();
clearButton.click();
}
});