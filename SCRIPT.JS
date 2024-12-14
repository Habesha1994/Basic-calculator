function add(num1, num2){
const sum = num1 + num2
return sum;
    
}

function subtract(num1, num2){
    const difference = num1 - num2
    return difference;
}

function multiply(num1, num2){
    const  product= num1 * num2
    return product;
}

function divide(num1, num2){
    const quotient = num1 / num2
    return quotient;
}

function power(n, p){
 if(p===1) return n;
    return n * power(n, p-1);
}

function log(base, number){
    
    return Math.log(number)
}
function modulus(num1, num2){
    return num1 % num2;
}

let firstNumber = 0;
let secondNumber = 0;
 


const firstNumberElement = document.getElementById("first-number");

firstNumberElement.addEventListener("change", function () {
 console.log("first number type"+ typeof this.value);
firstNumber = parseInt(this.value);
});


const secondNumberElement = document.getElementById("second-number");

secondNumberElement.addEventListener("change", function () {
 console.log("first number type"+ typeof this.value);
 secondNumber = parseInt(this.value);

});

const addButtonElement = document.getElementById("add-button");

addButtonElement.addEventListener("click", function () {
 const h1Element = document.createElement("h1")
h1Element.innerHTML = "result:" + add(firstNumber, secondNumber);
document.getElementById("selected-operator").innerHTML= " + "
document.body.appendChild(h1Element);


});


const subButtonElement = document.getElementById("sub-button");

subtractButtonElement.addEventListener("click", function () {
 const h1Element = document.createElement("h1")
h1Element.innerHTML = "result:" + subtracet(firstNumber, secondNumber);
document.getElementById("selected-operator").innerHTML= " - "
document.body.appendChild(h1Element);

});

const multiplyButtonElement = document.getElementById("multiply-button");

multiplyNumberElement.addEventListener("click", function () {
 const h1Element = document.createElement("h1")
h1Element.innerHTML = "result:" + multiply(firstNumber, secondNumber);
document.getElementById("selected-operator").innerHTML= " * "
document.body.appendChild(h1Element);

});


const divideButtonElement = document.getElementById("divide=button");

divideButtonElement.addEventListener("click", function () {
 const h1Element = document.createElement("h1")
h1Element.innerHTML = "result:" + division(firstNumber, secondNumber);
document.getElementById("selected-operator").innerHTML= "/"
document.body.appendChild(h1Element);
});


const powerButtonElement = document.getElementById("power-button");

powerButtonElement.addEventListener("click", function () {
 const h1Element = document.createElement("h1")
h1Element.innerHTML = "result:" + power(firstNumber, secondNumber);
document.getElementById("selected-operator").innerHTML= " ^ "
document.body.appendChild(h1Element);



});

const logButtonElement = document.getElementById("log-button");

logButtonElement.addEventListener("click", function () {
 const h1Element = document.createElement("h1");
document.getElementById("selected-operator").innerHTML= "  "
document.body.appendChild(h1Element);

});

const modulusButtonElement = document.getElementById("modulus-buttton");

modulusButtonElement.addEventListener("click", function () {
 const h1Element = document.createElement("h1")
h1Element.innerHTML = "result:" + modulus(firstNumber, secondNumber);
document.getElementById("selected-operator").innerHTML= " '| "
document.body.appendChild(h1Element);




});
























