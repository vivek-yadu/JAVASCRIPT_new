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
console.log(createWordArray(txt1))