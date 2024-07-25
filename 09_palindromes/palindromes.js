const palindromes = function (string) {
  let isPalindrome = false;

  let normalizedString = string.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedString = normalizedString.split('').reverse().join('');
  if (normalizedString === reversedString) {
    isPalindrome = true;
  }

  return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
