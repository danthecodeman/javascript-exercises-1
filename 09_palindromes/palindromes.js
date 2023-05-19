const palindromes = function (string) {
  // Remove punctuation and convert to lowercase
  const cleanStr = string.replace(/[^\w]/g, "").toLowerCase();
  // Reverse the string
  const reversedStr = cleanStr.split("").reverse().join("");
  // Check if the reversed string is equal to the original string
  return cleanStr === reversedStr;
};
// Do not edit below this line
module.exports = palindromes;
