let str = "12ab1128d"
let newStr = "";
for (let i = 0; i < str.length; i++) {
    if (str[i] == '1') {
        newStr += '@';
    } else if (str[i] == '2') {
        newStr += '#';
    } else {
        newStr += str[i];
    }
}
console.log(newStr);