const add = function(a, b) {
  let sum = a + b 
  return sum
};

const subtract = function(a, b) {
	let sum = a - b
  return sum
};

const sum = function(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum +=arr[i]
  }
	
  return sum
};

const multiply = function(arr) {
  let sum = 1
  for (let i = 0; i < arr.length; i++) {
    sum *=arr[i]
  }
	
  return sum
};

const power = function(number, power) {
  let sum = 1	
  for (let i = 0; i < power; i++) {
    sum *= number
  }
	
  return sum
};

const factorial = function(input) {
  let sum = 1	
  for (let i = 1; i <= input; i++) {
    sum *= i
  }
	
  return sum
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
