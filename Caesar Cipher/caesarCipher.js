/* 
Caesar cipher · 
The action of a Caesar cipher is to replace each plaintext letter 
with a different one a fixed number of places down the alphabet.
*/

function caesarCipher(str, num) {
  // avoid rotation or looping if the original num is more tha 26
  num = num % 26;

  let lowerCaseString = str.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let newString = "";

  //   loop on the original string
  for (let i = 0; i < lowerCaseString.length; i++) {
    let currentLetter = lowerCaseString[i];
    // handle if the charchter is space
    if (currentLetter === " ") {
      newString += currentLetter;
      continue;
    }
    let currentIndex = alphabet.indexOf(currentLetter);
    let newIndex = currentIndex + num;
    if (newIndex > 25) {
      newIndex = newIndex - 26;
    }
    if (newIndex < 0) {
      newIndex = 26 + newIndex;
    }
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    } else {
      newString += alphabet[newIndex];
    }
  }

  return `Output: ${newString} \n`;
}

console.log(
  caesarCipher("zoo keeper", 2), // output: "bqq mggrgt"
  caesarCipher("Big Car", -16), // output: "Lsq Mkb"
  caesarCipher("Javascript", -900) // output: "Tkfkcmbszd"
);
