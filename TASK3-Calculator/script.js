let displayValue = '0';
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;

function inputValue(value) {
    if (displayValue === '0') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function inputOperator(operator) {
    if (currentOperator === null) {
        firstOperand = parseFloat(displayValue);
        currentOperator = operator;
        displayValue = '0';
    } else {
        secondOperand = parseFloat(displayValue);
        calculate();
        currentOperator = operator;
    }
    updateDisplay();
}

function calculate() {
    if (firstOperand !== null && currentOperator !== null && secondOperand !== null) {
        switch (currentOperator) {
            case '+':
                firstOperand += secondOperand;
                break;
            case '-':
                firstOperand -= secondOperand;
                break;
            case '*':
                firstOperand *= secondOperand;
                break;
            case '/':
                firstOperand /= secondOperand;
                break;
        }
        displayValue = String(firstOperand);
        currentOperator = null;
        secondOperand = null;
    }
}

function calculateResult() {
    secondOperand = parseFloat(displayValue);
    calculate();
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    firstOperand = null;
    secondOperand = null;
    currentOperator = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}
