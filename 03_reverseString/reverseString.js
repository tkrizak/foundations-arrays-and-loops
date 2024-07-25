const reverseString = function (string) {
  const splitWords = string.split('');
  console.log(splitWords);
  const reverserWords = splitWords.reverse();
  console.log(reverserWords);
  const reversedString = reverserWords.join('');
  console.log(reversedString);

  return reversedString;
};

reverseString('hello world');
// Do not edit below this line
module.exports = reverseString;
