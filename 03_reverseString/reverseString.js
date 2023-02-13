const reverseString = function (input) {
  //splits string into an array of individual letters
  let toArray = input.split("");
  //reverses the array
  let reverse = toArray.reverse();
  //joins the reversed array back into a string
  let result = reverse.join("");
  //displays the result
  return result;
};

// Do not edit below this line
module.exports = reverseString;
