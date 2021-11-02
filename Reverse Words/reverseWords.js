/* 
Reverse Words
Given a string str, we need to print reverse of individual words.
*/

function reverseWords(string) {
  let wordsArr = string.split(" ");
  let reversedWordsArr = [];
  wordsArr.forEach((word) => {
    let reversedWord = "";
    for (let i = word.length; i >= 0; i--) {
      reversedWord += word[i];
    }
    if (reversedWord) {
      reversedWordsArr.push(reversedWord);
    }
  });
  return reversedWordsArr.join(" ");
}

console.log(
  reverseWords("this is a string of words \n"), // Output: "siht si a gnirts fo sdrow"
  reverseWords("Coding JavaScript") // Output: "gnidoC tpircSavaJ"
);
