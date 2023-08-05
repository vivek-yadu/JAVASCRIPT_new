function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

function countPrimes(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (isPrime(i)) {
            count++;
        }
    }
    return count;
}

console.log(countPrimes(75))