
let firstNumber = 0;
let secondNumber = 0;
let operator = "+";
let total = 0;

function add(firstNum, secondNum) {
    return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
    return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
    return firstNum / secondNum;
}

function operate(operator, firstNum, secondNum) {
    switch (operator) {
        case '+' : 
            total = add(firstNum, secondNum);
            break;
        case '+' : 
            total = subtract(firstNum, secondNum);
            break;
        case '+' : 
            total = multiply(firstNum, secondNum);
            break;
        case '+' : 
            total = divide(firstNum, secondNum);
            break;
    }
}