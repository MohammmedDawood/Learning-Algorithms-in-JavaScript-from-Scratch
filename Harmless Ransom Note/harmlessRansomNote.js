function harmlessRansomNote(noteText, magazineText) {
  let noteArr = noteText.split(" ");
  let magazineArr = magazineText.split(" ");

  //using a hashtable .. This is a linear Time Complexty O(n)+O(m)=O(m+n)=O(n) because we didn't use nested loops.
  let magazineObj = {};
  magazineArr.forEach((word) => {
    if (!magazineObj[word]) {
      magazineObj[word] = 0;
    }
    magazineObj[word]++;
  });

  let noteIsPossible = true;
  noteArr.forEach((word) => {
    if (magazineObj[word]) {
      magazineObj[word]--;
      if (magazineObj[word] < 0) {
        noteIsPossible = false;
      }
    } else {
      noteIsPossible = false;
    }
  });
  return noteIsPossible;
}

//test

console.log(
  harmlessRansomNote("is is", "this is all the magazine text in the magazine")
);
