let str = " ABCDABCDABCD"
let sep = 'ABCD'
let newStr = ''
let startPos = 0;
for (;;) {
    let index = str.indexOf(sep, startPos);
    if (index >= 0) {
        let word = str.substring(index, startPos);
        newStr += word + "xyz"
        startPos = index + 4;
    } else {
        let word = str.substring(startPos)
        newStr += word
        break;
    }
}
console.log(newStr)