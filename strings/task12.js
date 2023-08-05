var str = "qw2N**5g"
let newStr = ""
for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'a' && str[i] <= 'z') {
        newStr = newStr + str[i] + str[i];
    } else if (str[i] >= 'A' && str[i] <= 'Z') {
        newStr = newStr + str[i] + str[i]
    } else if (str[i] >= '0' && str[i] <= '9') {
        newStr = newStr + str[i] + str[i] + str[i]
    } else {
        newStr += ''
    }
}
console.log(newStr)