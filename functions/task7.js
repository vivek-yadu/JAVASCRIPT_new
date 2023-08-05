function larger(str, char1, char2) {
    let count1 = 0
    let count2 = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == char1) {
            count1++;
        } else if (str[i] == char2) {
            count2++;
        }
    }

    if (count1 > count2) {
        return 1
    } else if (count1 == count2) {
        return 0
    } else {
        return -1;
    }
}

console.log(larger('moozoom', 'm', 'o'))