var str = "my#mother"
var newStr = ''
for (let i = 0; i < str.length; i++) {
    if (str[i] == 'm') {
        newStr += ""
    } else {
        newStr += str[i];
    }
}
console.log(newStr)