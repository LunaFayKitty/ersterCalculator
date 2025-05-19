const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");
let calculationResult;

function add() {
  calculationResult = parseInt(num1.value) + parseInt(num2.value);
}

function sub() {
  calculationResult = parseInt(num1.value) - parseInt(num2.value);
}

function multiply() {
  calculationResult = parseInt(num1.value) * parseInt(num2.value);
}

function divide() {
  if (parseInt(num2.value) !== 0) {
    calculationResult = parseInt(num1.value) / parseInt(num2.value);
  } else {
    alert("Division by zero is not allowed!");
  }
}

function modulu() {
  calculationResult = parseInt(num1.value) % parseInt(num2.value);
}

function showResult() {
  if (typeof calculationResult !== 'undefined') {
    result.value = calculationResult;
  } else {
    alert("Please perform a calculation first!");
  }
}

