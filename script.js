const display = document.getElementById("display");
const btnUndo = document.getElementById("undo");
const numberButtons = document.querySelectorAll('button');
const btnEquals = document.getElementById("equals");

allButtons.forEach(function (btnClick) {
    btnClick.addEventListener('click', () => {
        if (display.textContent.length >= 10) {
            display.textContent = display.textContent.slice(0, 10);
        }
        display.textContent += btnClick.value;
       
    });
});
btnUndo.addEventListener('click', () => {
    display.textContent = display.textContent.substring(0, display.textContent.length - 1);
});
const inputs = {
    firstOperand: null,
    operator: null,
    secondOperand: null,
};


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
function operate(a, operator, b) {
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
            if (a == 0) return b;
            if (b == 0) return "don't";
            return divide(a, b);
        default:
            return "choose a valid operator"
    }
}
