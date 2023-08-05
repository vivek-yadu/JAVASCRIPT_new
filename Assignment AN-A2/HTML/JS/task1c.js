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

let firstChar = wordArr.reduce((acc, curr) => {
    return acc + curr[0]
})

console.log(firstChar)