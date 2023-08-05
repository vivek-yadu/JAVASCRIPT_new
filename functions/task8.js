function countBracket(str) {
    let countb1 = 0;
    let countb2 = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '(') {
            countb1++
        } else if (str[i] == ')') {
            countb2++
        }
    }

    if (countb1 == countb2) {
        return true
    } else {
        return false
    }
}

console.log(countBracket('5+(((a+b)*c)+d+e)-7'))