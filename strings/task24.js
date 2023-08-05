let str = "BAD CAR"
let newString = ""
for (let i = 0; i < str.length; i++) {
    if (str[i] == 'A') {
        newString += 'X'
    } else if (str[i] == 'B') {
        newString += 'Y'
    } else if (str[i] == 'C' || str[i] == 'D') {
        newString += ""
    } else {
        newString += str[i]
    }
}
console.log(newString)