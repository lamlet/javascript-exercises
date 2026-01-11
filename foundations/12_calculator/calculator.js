const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let sum = 0;
    arr.forEach((num) => sum += num);
    return sum;
};

const multiply = function(arr) {
  let product = 1;
  arr.forEach((num) => product *= num);
  return product;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(number) {
	let factorial = 1;
    for (let i = 1; i <= number; i++) {
      factorial = factorial * i;
    }
    return factorial;
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
