

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

const buttonClear = document.querySelector('#clear')

buttonInput.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent = button.textContent;
    });
});

buttonClear.addEventListener('click', () => {
    display.textContent = 0;
});



