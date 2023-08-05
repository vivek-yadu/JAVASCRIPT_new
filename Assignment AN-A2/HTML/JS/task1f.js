function createWordArray(txt) {
    let word = '';
    let words = [];
    for (let i = 0; i < txt.length; i++) {
        if (txt[i] != ' ') {
            word += txt[i];
        } else {
            words.push(word);
            word = '';
        }
    }
    words.push(word);
    return words;
}

let txt1 = "i enjoy coding and writing code is a lot of fun";

let wordArr = createWordArray(txt1)

let JSON = wordArr.map((word) => {
    let count = 0
    for (let i = 0; i < word.length; i++) {
        if (word[i] == 'a' || word[i] == 'e' || word[i] == 'i' || word[i] == 'o' || word[i] == 'u') {
            count++;
        }
    }
    let json = { myWord: word, wordLength: word.length, vowelCount: count }
    return json
})
console.log(JSON)