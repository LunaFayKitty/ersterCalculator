const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");
 let calculationResult;
// memory
let calcCount = 0;
let lastNum1;
let lastNum2;
let lastResult;

function add() {
  CheckAndCalculate(num1.value, num2.value, "+");
}

function sub() {
  CheckAndCalculate(num1.value, num2.value, "-");
}

function multiply() {
  CheckAndCalculate(num1.value, num2.value, "*");
}

function divide() {
  if (parseInt(num2.value) <= 0) {
    alert("Please enter a positive number2!");
  } else {
    CheckAndCalculate(num1.value, num2.value, "/");
  }
}

function modulu() {
  CheckAndCalculate(num1.value, num2.value, "%");
}

function CheckAndCalculate(num1, num2, operator) {
  if (num1 === "" || num2 === "") {
    alert("Please enter both input numbers!");
  } else {
    // check which operation
   let calculationResult;
    switch (operator) {
      case "+":
        calculationResult = parseInt(num1) + parseInt(num2);
        break;
      case "-":
        calculationResult = parseInt(num1) - parseInt(num2);
        break;
      case "*":
        calculationResult = parseInt(num1) * parseInt(num2);
        break;
      case "/":
        calculationResult = parseInt(num1) / parseInt(num2);
        break;
      case "%":
        calculationResult = parseInt(num1) % parseInt(num2);
        break;
      default:
        alert("Error operation!");
    }

    // zwischenwerte abspeichern
    if (calcCount === 0) {
      lastNum1 = parseInt(num1);
      lastNum2 = parseInt(num2);
      lastResult = calculationResult;
    }
    calcCount++;

    // write result into output
    result.value = calculationResult;
  }
}

function memory() {
  if (calcCount === 0) {
    alert("No last calculation detected!");
  } else {
    num1.value = lastNum1;
    num2.value = lastNum2;
    result.value = lastResult;
  }
}
