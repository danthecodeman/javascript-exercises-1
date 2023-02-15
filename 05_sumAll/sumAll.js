const sumAll = function (int1, int2) {
  //return error if both int1 and int2 are not a number
  if (typeof int1 !== "number" || typeof int2 !== "number") {
    return "ERROR";
  }
  //return error if negative number
  if (int1 < 0 || int2 < 0) {
    return "ERROR";
  }

  //store empty array
  let result = [];
  if (int1 <= int2) {
    //if int1 is smaller than int2 do
    //loop through array from int1 to int2
    //and store each Int in result
    for (let i = int1; i <= int2; i++) {
      result.push(i);
    }
  } else if (int1 >= int2) {
    //if int1 is greater than int2 do
    //loop through array from int2 to int1
    for (let i = int1; i >= int2; i--) {
      result.push(i);
    }
  } else {
    return "ERROR";
  }

  //sum each number in result together
  let sum = 0;
  for (let i = 0; i < result.length; i++) {
    sum += result[i];
  }
  //display result sum
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
