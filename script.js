const clear = document.querySelector('#clear');
const allClear = document.querySelector('#AC');
const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');
const equals = document.getElementById('equals');
let screen = document.getElementById('screen');
let bottomScreen = document.querySelector('.bottomScreen');
let topScreen = document.querySelector('.topScreen');
const fullStop = document.querySelector('#fullStop');

const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');

const buttons = document.querySelectorAll('button');

// when operation is clicked do this - add, subtract, equals
numbers.forEach((number) => number.addEventListener('click', (e) => numClick(e)));
// numbers.forEach((number) => number.addEventListener('click', (e)=> removeTransition(e)));
clear.addEventListener('click', () => clearScreen());
allClear.addEventListener('click', (e) => clearMemory(e));
equals.addEventListener('click', (e) => operate(e));
add.addEventListener('click', (e) => operate(e));
subtract.addEventListener('click', (e) => operate(e));
multiply.addEventListener('click', (e) => operate(e));
divide.addEventListener('click', (e) => operate(e));

//variables
let tempVar = '';
let numberArray = []; //create array of unknown size.
let i = numberArray.length;
let answer;
let operator = [];
let j = operator.length-1;
let op;
let isPressed;

function numClick (e) {
    tempVar += e.target.id;  
    bottomScreen.innerText = tempVar;         
    numberArray[i] = tempVar;
    numberArray[i] = numberArray.slice(i).join('');  
    numberArray[i] = parseFloat(numberArray[i]);
    
}
//keyboard 
window.addEventListener("keydown", e => {
    if(isNaN(e.key)) { //if e.key is not a number. 
        return;   
    }
    else {
        console.log(e.key);
        tempVar += e.key;  
        bottomScreen.innerText = tempVar; 
            
        numberArray[i] = tempVar;
        numberArray[i] = numberArray.slice(i).join('');  
        numberArray[i] = parseFloat(numberArray[i]); 
    }
})

function operate(e) {
  op = e.target.id;
    if (j === -1) {
        
        j++;//turns j from -1 to 0, allowing us to execute operator.push(op)
        i++;

        tempVar = '';
        operator.push(op);
        
    }
  else if (j >= 0) {
    operator.push(op);  
    switch(operator[j]) {
        case 'add':
        bottomScreen.innerText = addArr();
        j++;
        break;
        case 'subtract':
        bottomScreen.innerText = subtractArr();
        j++;
        break;
        case 'multiply':
        bottomScreen.innerText = multiplyArr();
        j++;
        break;
        case 'divide':
        bottomScreen.innerText = divideArr();
        j++;
        break;  
        case 'equals':
        switch(operator[j-1]) {
            case 'add':
                bottomScreen.innerText = addArr();
            break;
            case 'subtract':
                bottomScreen.innerText = subtractArr();
            break;
            case 'multiply':
                bottomScreen.innerText = multiplyArr();
            break;
            case 'divide':
                bottomScreen.innerText = divideArr();
            break;  
        }  
    }
  }
}
  
function addArr() {
    answer = numberArray.reduce(function(total, num) { //add multiple numbers
        return total + num;
    }, 0);
    if(i >= 1) {
            bottomScreen.innerText = answer;
    }
    tempVar = '';
    i++;
    numberArray = [];
    numberArray.push(answer);
    return answer;
}

function subtractArr () {
  answer = numberArray.reduce(function(total, num) { //add multiple numbers
        if(i >= 1) { //because you need a second number.
            return total-num;  
        } 
        else {
            return;
        }
 });
    if(i >= 1) {
            bottomScreen.innerText = answer;
    }
    tempVar = '';
    i++;
    numberArray = [];
    numberArray.push(answer);
    return answer;
}

function multiplyArr() {
    answer = numberArray.reduce(function(total, num) { //add multiple numbers   
        return total * num;
    }, 1);
    if(i >= 1) {
        bottomScreen.innerText = answer;
    }
    tempVar = '';
    i++;
    numberArray = [];
    numberArray.push(answer);
    return answer;
}

function divideArr () {
    answer = numberArray.reduce(function(total, num) { //add multiple numbers
        if(num == 0) {
            return bottomScreen.innerText = "ur cute";
        }
        else if(i >= 1) { //because you need a second number.
            return total/num;  
        } 
        else {
            return;
        }
    }); //starting number = first number. If skipped, it jumps to 2nd number..
    if(i >= 1) {
        bottomScreen.innerText = answer;
    }
    tempVar = '';
    i++;
    numberArray = [];
    numberArray.push(answer);
    return answer; 
}

function clearScreen() {
    numberArray.splice(0, i+1);
    bottomScreen.innerText = numberArray;
}

function clearMemory() {
    numberArray.splice(0, i+1);
    bottomScreen.innerText = numberArray;
    i = 0;
    j = -1;
    tempVar = '';
}








