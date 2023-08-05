var str = "javaScript"
let newStr = ""
for (let i = 0; i < str.length; i++) {
    if (i % 2 == 0) {
        newStr += str[i]
    }
}
console.log(newStr)