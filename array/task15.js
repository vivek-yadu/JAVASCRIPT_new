function checkAlternating(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (i % 2 == 0) {
            if (arr[i] % 2 == 0 && arr[i + 1] % 2 == 1) {
                continue;
            } else {
                return "NOT";
            }
        } else {
            if (arr[i] % 2 == 1 && arr[i + 1] % 2 == 0) {
                continue;
            } else {
                return "NOT";
            }
        }
    }
    return "ALTERNATING";
}


const arr = [4, 9, 16, 25, 49]
console.log(checkAlternating(arr))