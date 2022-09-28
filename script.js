const button = document.getElementById("button-one");
button.addEventListener('click', ()=> console.log("patates"));
const buttonTwo = document.getElementById("button-two");
buttonTwo.addEventListener('click', ()=> console.log("patates?"));
const buttonThree = document.getElementById("button-three");
buttonThree.addEventListener('click', ()=> console.log("is this patateS?"));
//this is how you add event listener to buttons
//look for how to make a certain grid element bigger than others to make results section



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

