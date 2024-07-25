const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numbers) {
  let result = 0;

  numbers.forEach((number) => {
    result += number;
  });

  return result;
};

const multiply = function (numbers) {
  let result = 1;

  numbers.forEach((number) => {
    result = result * number;
  });

  return result;
};

const power = function (num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function (n) {
  if (n <= 0) {
    return 1;
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
