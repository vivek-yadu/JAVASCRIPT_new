function count(str, ch) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ch) {
            count++;
        }
    }
    return count;
}

function maxCh(str) {
    let max = 0
    for (let i = 0; i < str.length; i++) {
        var ch = str[i]
        if (max <= count(str, ch)) {
            max = count(str, ch);
        }
    }
    return max
}
console.log(maxCh("abracadabra"))