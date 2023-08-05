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

console.log(wordArr)
let countAE = wordArr.reduce((acc, curr) => {

    if ((curr.indexOf('a') != -1) || (curr.indexOf('e') != -1))
        acc += 1;

    return acc;
}, 0)

console.log(countAE)