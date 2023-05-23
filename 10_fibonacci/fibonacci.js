const fibonacci = function (n) {
  // Check if the input is a non-negative integer
  if (n < 0) {
    return "OOPS";
  }

  if (n === 0) {
    return 0;
  }

  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    const temp = b;
    b = a + b;
    a = temp;
  }

  return b;
};

// Do not edit below this line
module.exports = fibonacci;
