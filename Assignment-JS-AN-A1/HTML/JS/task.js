function largeStr(str1, str2) {
    let len1 = str1.length;
    let len2 = str2.length;
    if (len1 < len2) {
        return str2
    } else if (len2 < len1) {
        return str1
    } else if (len1 == len2) {
        let num1 = calcNum(str1)
        let num2 = calcNum(str2)
        if (num1 > num2) {
            return str1;
        } else if (num2 > num1) {
            return str2;
        } else {
            return "Equal"
        }
    }
}


function calcNum(str) {
    let a = 1;
    let num = 0
    for (let i = str.length - 1; i >= 0; i--) {

        if (str[i] == '0') {
            num = num + (0) * a
            a = a * 10
        } else if (str[i] == '1') {
            num = num + (1) * a
            a = a * 10
        } else if (str[i] == '2') {
            num = num + (2) * a
            a = a * 10
        } else if (str[i] == '3') {
            num = num + (3) * a
            a = a * 10
        } else if (str[i] == '4') {
            num = num + (4) * a
            a = a * 10
        } else if (str[i] == '5') {
            num = num + (5) * a
            a = a * 10
        } else if (str[i] == '6') {
            num = num + (6) * a
            a = a * 10
        } else if (str[i] == '7') {
            num = num + (7) * a
            a = a * 10
        } else if (str[i] == '8') {
            num = num + (8) * a
            a = a * 10
        } else if (str[i] == '9') {
            num = num + (9) * a
            a = a * 10
        }
    }
    return num
}


console.log(largeStr('1234', '1235'))
console.log(largeStr('22334455667788', '22334455777788'))
console.log(largeStr('198765432198765', '2987654321987'))
console.log(largeStr('99988877766655500', '99988877766655500'))