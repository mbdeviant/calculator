const display = document.getElementById("display");             //add display to previous operations
const previousOperations = document.getElementById("previous-operations");
const btnUndo = document.getElementById("undo");
const btnDot = document.getElementById("dot");
const btnSign = document.getElementById("sign");
const numberButtons = document.querySelectorAll('button');
const operatorButtons = document.querySelectorAll('[data-operator]');
const btnEquals = document.getElementById("equals");

let firstOperand = '';
let currentOperation = null;
let secondOperand = '';

btnUndo.addEventListener('click', () => {
    if (display.textContent == "don't" || display.textContent == "Infinity") {
        currentOperation = null;
        display.textContent = "";
    }
    display.textContent = display.textContent.substring(0, display.textContent.length - 1);
});
btnSign.addEventListener('click', () => {
    if (display.textContent == "don't" || display.textContent == "Infinity" || display.textContent == ".") return;
    if (display.textContent != "") display.textContent = parseFloat(display.textContent * -1);
});
btnDot.addEventListener('mousedown', () => {
    if (display.textContent.includes(".")) btnDot.disabled = true;
});
operatorButtons.forEach(function (button) {
    button.addEventListener('click', () => setOperation(button.textContent));
});
numberButtons.forEach(function (button) {
    button.addEventListener('click', () => {
        if (display.textContent == "don't" || display.textContent == "Infinity") return;
        if (!display.textContent.includes('.')) btnDot.disabled = false;
        if (display.textContent.length >= 13) display.textContent = display.textContent.slice(0, 12);
        if (previousOperations.textContent.length >= 15) display.style.minHeight = "200px";
        if (previousOperations.textContent.length <= 13) display.style.minHeight = "100px";
        if (firstOperand == '' && currentOperation != null) {
            previousOperations.textContent = "";
            currentOperation = null;
        }
        display.textContent += button.value;
    });
});
btnEquals.addEventListener('click', calculate);

function setOperation(operator) {
    if (currentOperation !== null) calculate();
    if (display.textContent == "don't" || display.textContent == "-" || display.textContent == ".") return;
    if (display.textContent != "") firstOperand = display.textContent.valueOf();
    console.log(firstOperand);
    currentOperation = operator;

    display.textContent = "";
    previousOperations.textContent = `${firstOperand} ${currentOperation}`
}
function calculate() {
    if (currentOperation == null || display.textContent == "" || display.textContent == "don't" || display.textContent == "Infinity" || display.textContent == ".") return;
    if (currentOperation == '÷' && display.textContent.valueOf() == 0) return display.textContent = "don't";
    secondOperand = display.textContent.valueOf();
    display.textContent = operate(currentOperation, firstOperand, secondOperand);
    previousOperations.textContent += " " + secondOperand;
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