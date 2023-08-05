function sumOfDigits(n) {
    let sum = 0;
    while (n != 0) {
        sum += n % 10;
        n = (n - n % 10) / 10;
    }
    return sum;
}

console.log(sumOfDigits(1234))