function checkAB(str) {
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] == 'a' && str[i + 1] == 'b') {
            return "ABFOUND";
        }
    }
    return "AB NOT FOUND";
}
let str = "javaScript"
console.log(checkAB(str))