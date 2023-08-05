function removeRepeatingChars(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let index = 0;
        index = result.indexOf(str[i])

        if (index == -1) {
            result += str[i];
        }
    }
    return result.length;
}
console.log(removeRepeatingChars("AAAA"))
console.log(removeRepeatingChars("2222"))