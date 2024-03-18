

let firstNumber;
let operator;
let operatorSymbol;
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
    if (operator === '+') return add(firstNumber,secondNumber);
    if (operator === '-') return subtract(firstNumber,secondNumber);
    if (operator === 'x') return multiply(firstNumber,secondNumber);
    if (operator === '/') return divide(firstNumber,secondNumber);
};

const display = document.querySelector('#display')
const buttonInput = document.querySelectorAll('.input');
const buttonOperator = document.querySelectorAll('.operator')
const buttonEquals = document.querySelector('#equals')
const buttonClear = document.querySelector('#clear')

buttonInput.forEach((button) => {
    button.addEventListener('click', () => {
        if (operator === undefined) {
            firstNumber = display.textContent
            if ((display.textContent === '0') && (button.textContent === '.')) {
                display.textContent += button.textContent;
            } else if (!(display.textContent === '0')) {
                display.textContent += button.textContent;
            } else {
                display.textContent = button.textContent;
            }
            firstNumber = parseFloat(display.textContent);
        }
        if (operator) {
            if (secondNumber) {
                display.textContent += button.textContent
            } else {
                display.textContent = button.textContent;
            }
            secondNumber = parseFloat(display.textContent);
        }
    });
});



buttonOperator.forEach((button) => {
    button.addEventListener('click', () => {
        operator = button.textContent;
    })
})

buttonEquals.addEventListener('click', () => {
    display.textContent = operate(operator,firstNumber,secondNumber)
})



buttonClear.addEventListener('click', () => {
    display.textContent = 0;
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
});











