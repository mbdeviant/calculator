const btnTest = document.getElementById("button-sign");
const txtTest = document.getElementById("display");
btnTest.addEventListener('click', ()=> txtTest.textContent="i like potatoes");
const display = document.querySelectorAll("button");
display.forEach(function(i){
    i.addEventListener('click', (e)=>{
        txtTest.textContent = i.innerHTML;
    });
});

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
