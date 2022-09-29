//take the delete button to top right
//take the equals next to zero


const btnClear = document.getElementById("button-clear");
btnClear.addEventListener('click',()=> console.clear());
const btnOne = document.getElementById("button-one");
btnOne.addEventListener('click', ()=> console.log("i like them potatoes too"));
const btnSeven = document.getElementById("button-seven");
btnSeven.addEventListener('click',()=> console.log("patates"));







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
            if (b == 0) return "Cannot divide by zero";
            return divide(a, b);
        default:
            return "choose a valid operator"
    }
}
