var str = "AAXXXBBYYYCXXDYY"
let startpos = 0;
let newString = ""
for (let i = 0; i < str.length; i++) {
    if (str[i] == 'X') {
        if (str[i - 1] == 'X') {

        } else {
            newString += str[i]
        }
    } else if (str[i] == 'Y') {
        if (str[i - 1] == 'Y') {

        } else {
            newString += str[i]
        }
    } else {
        newString += str[i]
    }
}

console.log(newString)