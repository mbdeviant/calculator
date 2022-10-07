const display = document.getElementById("display");
const btnUndo = document.getElementById("undo");
const numberButtons = document.querySelectorAll('button');
const operatorButtons = document.querySelectorAll('[data-operator]');
const btnEquals = document.getElementById("equals");

btnUndo.addEventListener('click', () => {
    display.textContent = display.textContent.substring(0, display.textContent.length - 1);
});
btnEquals.addEventListener('click', calculate);
numberButtons.forEach(function (button) {
    button.addEventListener('click', () => {
        if (display.textContent.length >= 10) {
            display.textContent = display.textContent.slice(0, 9);
        }
        display.textContent += button.value;
    });
});
operatorButtons.forEach(function (button) {
    button.addEventListener('click', () => setOperation(button.textContent));
});

//can not divide, there's a bug


let firstOperand = '';
let currentOperation = null;
let secondOperand = '';

function setOperation(operator) {
    if (currentOperation != null) calculate();
    firstOperand = display.textContent.valueOf();
    console.log(firstOperand);
    currentOperation = operator;
    display.textContent = "";
}
function calculate() {
    if (currentOperation == null || display.textContent == "") return;
    if (currentOperation == '÷') display.textContent = "don't";
    secondOperand = display.textContent.valueOf();
    display.textContent = operate(currentOperation, firstOperand, secondOperand);
    currentOperation = null;

}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case 'x':
            return multiply(a, b);
        case '÷':
            return divide(a, b);
        default:
            return "choose a valid operator"
    }
}
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return parseFloat((a / b).toFixed(1));
}
