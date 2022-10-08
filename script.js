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
    if (display.textContent != "") display.textContent = parseFloat(display.textContent * -1);
    display.textContent = display.textContent.toString();
});
btnDot.addEventListener('mousedown', () => {
    if (display.textContent.includes(".")) {
        btnDot.disabled = true;
    }
});
operatorButtons.forEach(function (button) {
    button.addEventListener('click', () => setOperation(button.textContent)); // multiple click on any operator messes with the calculator, fix 
});
numberButtons.forEach(function (button) {
    button.addEventListener('click', () => {
        if (display.textContent == "don't") return;  //when the number has more than 10 digits, calculator does not work properly, make the container grow accordingly
        if (!display.textContent.includes('.')) btnDot.disabled = false;
        display.textContent += button.value;
    });
});

btnEquals.addEventListener('click', calculate);

function setOperation(operator) {
    if (currentOperation !== null) calculate();
    if (display.textContent == "don't" || display.textContent == "-" || display.textContent == "") return;
    firstOperand = display.textContent.valueOf();
    console.log(firstOperand);
    currentOperation = operator;
    display.textContent = "";
    previousOperations.textContent = `${firstOperand} ${currentOperation}`
}
function calculate() {
    if (currentOperation == null || display.textContent == "") return;
    if (currentOperation == '÷' && display.textContent.valueOf() == 0) return display.textContent = "don't";
    if (display.textContent == "don't") return;
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
