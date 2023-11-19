// Template Literals
let firstName = "John Doe";
console.log(`Hello ${firstName}, welcome.`);

// Ternary Operator
let speed = 70;
let message = speed >= 100 ? "too fast" : "ok"; // <condition> ? <if true> : <else>
console.log(message);

// Arrow function
let sum = (a, b) => {
  let result = a + b;
  return result;
};
console.log(sum(3, 2));

let sum1 = (a, b) => a + b; // one line functions
console.log(sum1(5, 5));

let greet = (name) => `Hi ${name}!`; // only one parameter
console.log(greet("Mathew"));

let sayHello = () => "Hello"; // no parameter
console.log(sayHello());

// simple function declaration
function add(a, b) {
  return a + b;
}

// function expression
let multiply = function (a, b) {
  return a * b;
};

// factory function
function functionName(param1, param2) {
  return {
    property1: param1, // if property same as parameter, "property1,"
    property2: param2,
  };
}
let myObject = functionName(arg1, arg2);

// constructor Function
function FunctionName(param1, param2) {
  this.property1 = param1;
  this.property2 = param2;
}
let myObject1 = new FunctionName(arg1, arg2);

/* it is possible to pass function as an arguement directly or by its name without "()" */
