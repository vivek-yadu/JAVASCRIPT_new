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

let filteredArr = wordArr.filter(function(word) {
    return word.indexOf('a') >= 0 || word.indexOf('e') >= 0
});
console.log(filteredArr);