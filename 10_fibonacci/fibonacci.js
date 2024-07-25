const fibonacci = function (n) {
  const num = Number(n);

  if (num === 0) return 0;
  if (num < 0) return 'OOPS';

  let a = 1;
  let b = 0;
  let result;

  for (let i = 2; i <= num; i++) {
    result = a + b;
    b = a;
    a = result;
  }

  return a;
};

// Do not edit below this line
module.exports = fibonacci;
