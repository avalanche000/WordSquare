import { wordList, commonWordList, fiveLetterWordList } from "./wordList.js";

const words = fiveLetterWordList.filter((word) => word.length === 5);

function compare(word, searchString) {
  for (let i = 0; i < word.length; i++) {
    if (searchString[i] === "_") continue;
    if (word[i] !== searchString[i]) return false;
  }

  return true;
}

function checkSquare(...args) {
  let word;

  for (let i = 0; i < args.length; i++) {
    word = "";

    for (let j = 0; j < args.length; j++) {
      word += args[j][i];
    }

    if (!words.includes(word)) return false;
  }

  return true;
}

let c1 = 0;
let c2 = 0;
let c3 = 0;
let c4 = 0;
let c5 = 0;

let words1;
let words2;
let words3;
let words4;
let words5;

let top;

let found = false;

for (let c = 0; c < words.length; c++) {
  top = words[c];

  console.log("Trying", top);

  words1 = words.filter((word) => compare(word, top[0] + "____"));
  words2 = words.filter((word) => compare(word, top[1] + "____"));
  words3 = words.filter((word) => compare(word, top[2] + "____"));
  words4 = words.filter((word) => compare(word, top[3] + "____"));
  words5 = words.filter((word) => compare(word, top[4] + "____"));

  console.log(
    words1.length *
      words2.length *
      words3.length *
      words4.length *
      words5.length
  );

  for (
    let k = 0;
    k <
    words1.length *
      words2.length *
      words3.length *
      words4.length *
      words5.length;
    k++
  ) {
    c1 = Math.floor(
      k / (words2.length * words3.length * words4.length * words5.length)
    );
    c2 = Math.floor(
      (k / (words3.length * words4.length * words5.length)) % words2.length
    );
    c3 = Math.floor((k / (words4.length * words5.length)) % words3.length);
    c4 = Math.floor((k / words5.length) % words4.length);
    c5 = Math.floor(k % words5.length);

    found = checkSquare(
      words1[c1],
      words2[c2],
      words3[c3],
      words4[c4],
      words5[c5]
    );

    if (found) break;
  }

  if (found) break;

  console.log("Did not work", top);
}

console.log(words1[c1], words2[c2], words3[c3], words4[c4], words5[c5]);
