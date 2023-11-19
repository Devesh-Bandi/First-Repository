let operator = "+";
let number1 = 2;
let number2 = 3;

let result;
switch (operator) {
  case "+":
    result = number1 + number2;
    break;
  case "-":
    result = number1 - number2;
    break;
  case "*":
    result = number1 * number2;
    break;
  case "/":
    result = number1 / number2;
    break;
  default:
    result = "Invalid operator";
    break;
}
console.log(result);
