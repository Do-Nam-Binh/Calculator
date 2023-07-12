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


function updateDisplays(){
    calculation.textContent = currentNum + " " + currOperator;
    resultDisplay.textContent = "";
    equalBtn.disabled = false;
    decimalBtn.disabled = false;
}

//Define displays
const calculation = document.querySelector('.calculation');
const resultDisplay = document.querySelector('.result');

//Define operator buttons
const operators = document.querySelectorAll('.operator');
operators.forEach(item => {
    item.addEventListener('click', () => {
       
        if(currentNum != "" && resultDisplay.textContent != ""){
            currentNum = operate(parseOperator(currOperator), currentNum, resultDisplay.textContent);
            updateDisplays();
        }   

        currOperator = item.textContent;
        if(currentNum == "" && resultDisplay.textContent != ""){
            currentNum = resultDisplay.textContent;
            updateDisplays();

        }else if(currentNum != "" && resultDisplay.textContent == ""){
            updateDisplays();
        }               
    })
})

//Define all digits
const digits = document.querySelectorAll('.digits');
digits.forEach(digit => {
    digit.addEventListener('click', function(){updateResult(digit.textContent)});
});


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

document.addEventListener("keydown", (e) => {
    key = e.key;
    switch(key){
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            console.log(key);
            updateResult(key);
            break;
        case "Backspace":
            deleteNum();
            break;
        case "+":
        case "-":
        case "/":
        case "x":
            if(currentNum != "" && resultDisplay.textContent != ""){
                currentNum = operate(parseOperator(currOperator), currentNum, resultDisplay.textContent);
                updateDisplays();
            }   
    
            currOperator = key;
            if(currentNum == "" && resultDisplay.textContent != ""){
                currentNum = resultDisplay.textContent;
                updateDisplays();
    
            }else if(currentNum != "" && resultDisplay.textContent == ""){
                updateDisplays();
            }      
            e.preventDefault();
            break;
        case "=":
            if(currentNum != "" && resultDisplay.textContent != ""){
                currentResult = operate(parseOperator(currOperator), currentNum, resultDisplay.textContent);
                calculation.textContent = currentNum + " " + currOperator + " "+ resultDisplay.textContent + " = " +currentResult;
                currentNum = currentResult;
                resultDisplay.textContent = "";
                equalBtn.disabled = true;
                decimalBtn.disabled = false;
                
            }
            break;
    }
})