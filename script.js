let calcDisplay = document.getElementById("calc-Display");
let num1 = 0;
let num2 = 0;
let answer = 0;
let operand = undefined;
let operandClicked = false;

let currentDisplay = '0'

calcDisplay.textContent = currentDisplay;

function addToValue(num) {
    if (operandClicked === true) {
        changeDisplay(num);
        num2 = parseInt(currentDisplay);
        console.log("num2:")
        console.log(num2);
    }
    else {
        changeDisplay(num);
        num1 = parseInt(currentDisplay);
        console.log("num1:")
        console.log(num1);
    }

}

function changeDisplay(button) {
    if (currentDisplay === '0') {
        currentDisplay = button;
        calcDisplay.textContent = currentDisplay;
    }
    else {
        currentDisplay = currentDisplay + button
        calcDisplay.textContent = currentDisplay;
    }
}

function resetDisplay() {
    currentDisplay = '0'
    num1 = 0;
    num2 = 0;
    calcDisplay.textContent = currentDisplay;
}

function prepNextValue(operandChoice) {
    if(operandClicked===true){
        showAnswer();
    }
    operand = operandChoice;
    operandClicked = true;
    currentDisplay = '0';
    
}

function showAnswer(){
    operate(operand,num1,num2);
    num1=answer;
    operandClicked = false;

    calcDisplay.textContent = answer;
    
    console.log('answer');
    console.log(answer);
}


function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(op, num1, num2) {
   switch(op){
    case 'add':
        answer =  add(num1,num2);
        console.log("num1:")
        console.log(num1);
        console.log("num2:")
        console.log(num2);
   }
}