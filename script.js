function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}


function operate(operator, num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    let result = null;
    switch(operator){
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
    }
    return result;
}

function clear(){
    calculation.textContent = "";
    resultDisplay.textContent = "";
    currentNum = "";
}

function updateResult(number){
    resultDisplay.textContent += number;
}

function parseOperator(operator){
    if(operator == 'x'){
        return '*';
    }else{
        return operator;
    }
}

function deleteNum(){
    if(resultDisplay.textContent != ""){
        resultDisplay.textContent = resultDisplay.textContent.slice(0, -1);
    }
}

let currentNum = "", currentResult = "";
let currOperator = null;



//Define displays
const calculation = document.querySelector('.calculation');
const resultDisplay = document.querySelector('.result');

//Define operator buttons
const operators = document.querySelectorAll('.operator');
operators.forEach(item => {
    item.addEventListener('click', () => {   
        if(currentNum != "" && resultDisplay.textContent != ""){
            currentNum = operate(parseOperator(currOperator), currentNum, resultDisplay.textContent);
            calculation.textContent = currentNum + " " + currOperator;
            resultDisplay.textContent = "";
            equalBtn.disabled = false;
            decimalBtn.disabled = false;
        }   

        currOperator = item.textContent;
        if(currentNum == "" && resultDisplay.textContent != ""){
            currentNum = resultDisplay.textContent;
            calculation.textContent = currentNum + " " + currOperator;
            resultDisplay.textContent = "";
            decimalBtn.disabled = false;
            equalBtn.disabled = false;
        }else if(currentNum != "" && resultDisplay.textContent == ""){
            calculation.textContent = currentNum + " " + currOperator;
            decimalBtn.disabled = false;
            equalBtn.disabled = false;
        }                   

    })
})

//Define all digits
const one = document.querySelector('.one');
one.addEventListener('click', function(){updateResult("1");});
const two = document.querySelector('.two');
two.addEventListener('click', function(){updateResult("2");});
const three = document.querySelector('.three');
three.addEventListener('click', function(){updateResult("3");});
const four = document.querySelector('.four');
four.addEventListener('click', function(){updateResult("4");});
const five = document.querySelector('.five');
five.addEventListener('click', function(){updateResult("5");});
const six = document.querySelector('.six');
six.addEventListener('click', function(){updateResult("6");});
const seven = document.querySelector('.seven');
seven.addEventListener('click', function(){updateResult("7");});
const eight = document.querySelector('.eight');
eight.addEventListener('click', function(){updateResult("8");});
const nine = document.querySelector('.nine');
nine.addEventListener('click', function(){updateResult("9");});
const zero = document.querySelector('.zero');
zero.addEventListener('click', function(){updateResult("0");});


const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', clear);
const deleteBtn = document.querySelector('.delete');
deleteBtn.addEventListener('click', deleteNum);

const decimalBtn = document.querySelector('.decimal');
decimalBtn.addEventListener('click', function(){
    updateResult(".");
    decimalBtn.disabled = true;
});

const equalBtn = document.querySelector('.equal');
equalBtn.addEventListener('click', () => {
    if(currentNum != "" && resultDisplay.textContent != ""){
        currentResult = operate(parseOperator(currOperator), currentNum, resultDisplay.textContent);
        calculation.textContent = currentNum + " " + currOperator + " "+ resultDisplay.textContent + " = " +currentResult;
        currentNum = currentResult;
        resultDisplay.textContent = "";
        equalBtn.disabled = true;
        decimalBtn.disabled = false;
    }
})