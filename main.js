const display = document.querySelector(".display");
const totalDisplay = document.querySelector(".total");

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
    if (secondNum === 0) {
        return "Can't divide by 0";
    }
    else {
        return firstNum / secondNum;
}
    }

function operate(operator, firstNum, secondNum) {
    switch (operator) {
        case '+' : 
            total = add(firstNum, secondNum);
            break;
        case '-' : 
            total = subtract(firstNum, secondNum);
            break;
        case '*' : 
            total = multiply(firstNum, secondNum);
            break;
        case '/' : 
            total = divide(firstNum, secondNum);
            break;
    }
}

function updateDisplay(element) {
    display.textContent += (typeof element === "string") ?  ` ${element} ` : element;
    evaluate();
}

function clearDisplay() {
    
    display.textContent = "";
    totalDisplay.textContent = "";
    total = 0;
}

function evaluate() {
    let expression = display.textContent.trim().split(" ");
    if (expression.length >= 3) {
        operate(expression[1], Number(expression[0]), Number(expression[2]));
        totalDisplay.textContent = total.toFixed(2);
        display.textContent = total.toFixed(2);
        
    }
}
