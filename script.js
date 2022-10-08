const display = document.getElementById("display");
const btnUndo = document.getElementById("undo");
const btnDot = document.getElementById("dot");
const btnSign = document.getElementById("sign");
const numberButtons = document.querySelectorAll('button');
const operatorButtons = document.querySelectorAll('[data-operator]');
const btnEquals = document.getElementById("equals");

btnUndo.addEventListener('click', () => {
    if (display.textContent == "don't") {
        currentOperation = null;
        display.textContent = "";
    }
    display.textContent = display.textContent.substring(0, display.textContent.length - 1);
});
btnSign.addEventListener('click', ()=>{
    if(display.textContent != "") display.textContent = parseFloat(display.textContent * -1);
});
btnDot.addEventListener('click', () => {
    if (display.textContent.includes('.')) btnDot.disabled = true;
});
operatorButtons.forEach(function (button) {
    button.addEventListener('click', () => setOperation(button.textContent));
});
numberButtons.forEach(function (button) {
    button.addEventListener('click', () => {
        if (display.textContent == "don't") return;
        if (display.textContent.length >= 10) {
            display.textContent = display.textContent.slice(0, 10);
        }
        if (!display.textContent.includes('.')) btnDot.disabled = false;
        display.textContent += button.value;
    });
});
btnEquals.addEventListener('click', calculate);



let firstOperand = '';
let currentOperation = null;
let secondOperand = '';

function setOperation(operator) {
    if (currentOperation != null) calculate();
    if (display.textContent == "don't") return;
    firstOperand = display.textContent.valueOf();
    console.log(firstOperand);
    currentOperation = operator;
    display.textContent = "";
}
function calculate() {
    if (currentOperation == null || display.textContent == "") return;
    if (currentOperation == '÷' && display.textContent.valueOf() == 0) return display.textContent = "don't";
    if (display.textContent == "don't") return;
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
