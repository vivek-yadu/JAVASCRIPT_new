var str = "zpozzom"
var newStr = ""
for (let i = 0; i < str.length; i++) {
    if (str[i] == 'z') {
        newStr += 'x'
    } else {
        newStr += str[i]
    }
}
console.log(newStr)