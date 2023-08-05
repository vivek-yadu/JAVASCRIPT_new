const removes = (str, char) => {
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] == char) {
            newStr += ""
        } else {
            newStr += str[i]
        }
    }
    return newStr
}
console.log(removes("moommzoom", "m"))