function largeStr(str1, str2) {
    let len1 = str1.length;
    let len2 = str2.length;
    if (len1 < len2) {
        return str2
    } else if (len2 < len1) {
        return str1
    } else if (len1 == len2) {
        let num1 = Number(str1)
        let num2 = Number(str2)

        if (num1 > num2) {
            return str1;
        } else if (num2 > num1) {
            return str2;
        } else {
            return "Equal"
        }
    }
}

console.log(largeStr('1234', '1235'))
console.log(largeStr('22334455667788', '22334455777788'))
console.log(largeStr('198765432198765', '2987654321987'))
console.log(largeStr('99988877766655500', '99988877766655500'))