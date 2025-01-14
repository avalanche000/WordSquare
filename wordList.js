import fs from "node:fs";

const wordListUrl =
  "https://raw.githubusercontent.com/dwyl/english-words/refs/heads/master/words_dictionary.json";
const wordList = await loadWordList(wordListUrl);
const commonWordList = JSON.parse(fs.readFileSync("./common.json"));
const fiveLetterWordList = JSON.parse(fs.readFileSync("./fiveLetter.json"));

async function loadWordList(url) {
  return fetch(url, { method: "GET" })
    .then((res) => res.json())
    .then((json) => Object.keys(json))
    .catch((error) => console.error(error));
}

function wordsOfLength(length) {
  return wordList.filter((word) => word.length === length);
}

export { wordList, commonWordList, fiveLetterWordList, wordsOfLength };
