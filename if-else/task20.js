let n = 2456;
let sum = 0;
let num = 0;
for (let i = 1; i <= 4; i++) {
    let lastDigit = n % 10;
    sum += lastDigit;
    n = (n - lastDigit) / 10;
}
console.log(sum);