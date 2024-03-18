

let firstNumber;
let operator;
let secondNumber;

function add(a,b) {
    return a+b;
};

function subtract(a,b) {
    return a-b;
};

function multiply(a,b) {
    return a*b;
};

function divide(a,b) {
    return a/b;
};

function operate(operator,firstNumber,secondNumber) {
    return operator(firstNumber,secondNumber);
};

const display = document.querySelector('#display')

const buttonInput = document.querySelectorAll('.input');

const buttonOperator = document.querySelectorAll('.operator')

const buttonClear = document.querySelector('#clear')

buttonInput.forEach((button) => {
    button.addEventListener('click', () => {
        if (operator === undefined) {
            firstNumber = display.textContent
            if ((display.textContent === '0') && (button.textContent === '.')) {
                display.textContent += button.textContent;
                firstNumber = display.textContent;
            } else if (!(display.textContent === '0')) {
                display.textContent += button.textContent;
                firstNumber = display.textContent;
            } else {
                display.textContent = button.textContent;
                firstNumber = display.textContent;
            }
        }

        if (operator) {
            if (secondNumber) {
                display.textContent += button.textContent
            } else {
                display.textContent = button.textContent;
            }
            
            secondNumber = display.textContent;


        }
        
    });
});



buttonOperator.forEach((button) => {
    button.addEventListener('click', () => {
        operator = button.textContent;
    })
})



buttonClear.addEventListener('click', () => {
    display.textContent = 0;
});









