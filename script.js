function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a,b){
    return a*b;
}
function divide (a,b){
    return parseFloat((a/b).toFixed(1));
}

function operate(a,operator,b){
    a = number(a);
    b = number(b);
    if (operator == '+'){
        return a+b;
    }
}