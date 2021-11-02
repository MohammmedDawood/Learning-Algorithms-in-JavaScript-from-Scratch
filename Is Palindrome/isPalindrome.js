/*
A palindrome is a word, 
number, phrase, or other sequence of characters 
which reads the same backward as forward, 
such as madam, I'm Adam or racecar.  

we will use String & array (manipulation and methods).
Ignore punctuation characters and numbers, turn every letter to lower case.
*/
function isPalindrome(string) {
  string = string.toLowerCase();
  let charachtersArr = string.split("");
  // ignore all not letter charachters and keep letters in lower case in lettersArr.
  let validCharachters = "abcdefghijklmnopqrstuvwxyz".split("");
  lettersArr = [];
  charachtersArr.forEach((char) => {
    if (validCharachters.indexOf(char) > -1) {
      lettersArr.push(char);
    }
  });

  if (lettersArr.join("") === lettersArr.reverse().join("")) {
    return true;
  } else {
    return false;
  }
}

console.log(
  // test cases
  isPalindrome("madam I'm Adam"), // true
  isPalindrome("Race Car"), // true
  isPalindrome("Coding JS") // false
);
