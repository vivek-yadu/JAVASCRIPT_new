function isGood(str) {
    let start = 0;
    let close = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '(') {
            start++;
        } else if (str[i] == ')') {
            if (start == 0) {
                return false;
            }
            start--;
            close++;
        }
    }
    if (start == 0 && close > 0) {
        return true;
    }
    return false;
}

console.log(isGood('5+(((a+b)*c)+d+e)-7))'))