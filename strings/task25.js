var str = "1+2+++3+4"
let startpos = 0;
let newString = ""
for (let i = 0; i < str.length; i++) {
    if (str[i] == '+') {
        if (str[i - 1] == '+') {

        } else {
            newString += str[i]
        }
    } else {
        newString += str[i]
    }
}

console.log(newString)