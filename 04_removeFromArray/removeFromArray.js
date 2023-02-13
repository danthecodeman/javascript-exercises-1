const removeFromArray = function (array, ...args) {
  let result = array.filter((arg) => !args.includes(arg));
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
