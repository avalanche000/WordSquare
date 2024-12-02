const wordListUrl = "https://raw.githubusercontent.com/dwyl/english-words/refs/heads/master/words_dictionary.json";
const wordList = await loadWordList();

function loadWordList() {
  return fetch(wordListUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => console.error(error));
}

export { wordList };
