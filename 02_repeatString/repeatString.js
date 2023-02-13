const repeatString = function (string, num) {
  //let result = string.repeat(num);
  //return result;
  if (num > 0) {
    string.repeat(num);
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
