let str = "12049brt"
let newString = "";
for (let i = 0; i < str.length; i++) {
    if (str[i] == '1') {
        newString += '@';
    } else if (str[i] == '2') {
        newString += '#';
    } else if (str[i] == '3') {
        newString += '&';
    } else if (str[i] >= '4' && str[i] <= '9') {
        newString += '$';
    } else {
        newString += str[i];
    }
}
console.log(newString)