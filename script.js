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

let num1, num2 = null;
let operator = null;

function operate(operator, num1, num2){
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
}

function updateResult(number){
    resultDisplay.textContent += number;
}

let firstNum, secNum, currOperator = null;



//Define displays
const calculation = document.querySelector('.calculation');
const resultDisplay = document.querySelector('.result');

//Define operator buttons
const addButton = document.querySelector('.add');
const substractButton = document.querySelector('.substract');
const multiplyButton = document.querySelector('.multiply');
const divideButton = document.querySelector('.divide');
const operators = document.querySelectorAll('.operator');
operators.forEach(item => {
    item.addEventListener('click', () => {   
        currOperator = item.textContent;
    
        if(resultDisplay.textContent != ""){
            firstNum = Number(resultDisplay.textContent);
        }
        if(firstNum != null){
            calculation.textContent = firstNum + " " + currOperator;
        }
        
        resultDisplay.textContent = "";                         
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

const decimalBtn = document.querySelector('.decimal');

const equalBtn = document.querySelector('.equal');