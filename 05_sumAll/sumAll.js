const sumAll = function (num1, num2) {
  let result = 0;

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return 'ERROR';
  }

  if (num1 <= 0 || num2 <= 0) {
    return 'ERROR';
  }

  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return 'ERROR';
  }

  const startingNumber = Math.min(num1, num2);
  const endingNumber = Math.max(num1, num2);

  for (let i = startingNumber; i <= endingNumber; i++) {
    result += i;
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;
