let firstNumber = 0;
let operator;
let secondNumber;
let answer;

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
    if (a === 0) return 'cannot divide by zero!'
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
const buttonDecimal = document.querySelector('#decimal')
const buttonNegative = document.querySelector('#negative')

buttonInput.forEach((button) => {
    button.addEventListener('click', () => {
        if (operator === undefined) {
            firstNumber = parseFloat(display.textContent)
            if (display.textContent === '0' || answer) {
                display.textContent = button.textContent;
                answer = undefined;
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

function calculate() {
    answer = operate(operator,firstNumber,secondNumber)
    if (Number.isInteger(answer)) {
        display.textContent = parseInt(answer);
    } else {
        display.textContent = answer.toFixed(10);
    }
    firstNumber = parseFloat(display.textContent)
    operator = undefined;
    secondNumber = undefined;
    
}



buttonOperator.forEach((button) => {
    button.addEventListener('click', () => {
        if (secondNumber) calculate()

        operator = button.textContent;
    })
})

buttonEquals.addEventListener('click', calculate)

buttonClear.addEventListener('click', () => {
    display.textContent = 0;
    firstNumber = 0;
    secondNumber = undefined;
    operator = undefined;
});

buttonDecimal.addEventListener('click', () => {
    if (display.textContent.includes('.') && !operator) return;
    if (display.textContent.includes('.') && secondNumber) return;
    if (display.textContent === '0') {
        display.textContent = '0.';
    } else if (firstNumber && operator && !secondNumber) {
        display.textContent = '0.';
        secondNumber = '0.'
    } else {
        display.textContent += '.';
    };
    
})

buttonNegative.addEventListener('click', () => { 
    addNegative();
    if (operator === undefined) {
        firstNumber = parseFloat(display.textContent);
    } 
    if (operator) {
        secondNumber = parseFloat(display.textContent);
    }
} )

// buttonNegative.addEventListener('click', () => {
//     if (display.textContent === '0') return;
//     if (display.textContent[0] === '-') {
//         display.textContent = display.textContent.slice(1);

//     } else {
//         display.textContent = '-' + display.textContent
//     }
// })

function addNegative() {
    if (display.textContent === '0') return;
    if (display.textContent[0] === '-') {
        display.textContent = display.textContent.slice(1);

    } else {
        display.textContent = '-' + display.textContent
    }
}











