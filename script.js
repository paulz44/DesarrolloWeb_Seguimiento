let display = document.getElementById('display');
let currentNr = "";
let operator = "";
let firstNr = "";
let secondNr = "";

function setOperator(op){
    console.log("setOperator() aufgerufen");
    if (firstNr == "") {
        firstNr = currentNr;
        currentNr = "";
        operator = op;
    } else {
        secondNr = currentNr;
        calculateResult();
        operator = op;
    }
    display.innerText = operator;
}

function calculateResult() {
    console.log("calculateResult() aufgerufen");
    // if a value is missing, do nothing
    if (firstNr === "" || currentNr === "" || operator === "") {
        return; 
    }

    let secondNr = currentNr;

    let result = 0;
    switch (operator) {
        case "+":
            result = add(parseFloat(firstNr), parseFloat(secondNr));
            break;
        case "-":
            result = subtract(parseFloat(firstNr), parseFloat(secondNr));
            break;
        case "*":
            result = multiply(parseFloat(firstNr), parseFloat(secondNr));
            break;
        case "/":
            result = divide(parseFloat(firstNr), parseFloat(secondNr));
            break;
    }
    console.log("Berechnung abgeschlossen, Ergebnis:", result);
    display.innerText = result;
    firstNr = result.toString();
    secondNr = "";
    currentNr = "";
    operator = "";
}

function add(a, b) {
    return a + b;
}       
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {   
    return a * b;
}   
function divide(a, b) {     
    return a / b;
}

//function shows added characters, ignores leading 0s
function appendNr(num) {
    if (currentNr === "" && firstNr !== "" && operator === "") {
        firstNr = "";
    }
    if (currentNr === "0") {
        currentNr = "";
    }
    currentNr += num;
    display.innerText = currentNr;
}

//delete everything + memory
function clearDisplay() {
    currentNr = "";
    display.innerText = "0";
    operator = "";
}

//delete last character
function deleteLast() {
    currentNr = currentNr.slice(0, -1);
    display.innerText = currentNr;
    if (currentNr === "") {
        display.innerText = "0";
    }
}