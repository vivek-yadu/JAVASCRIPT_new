var str = "qw23BN**45g"
let newStr = ""
for (let i = 0; i < str.length; i++) {
    if (str[i] >= 0 && str[i] <= 9) {
        newStr += str[i];
    }
}
console.log("Digits=" + newStr)