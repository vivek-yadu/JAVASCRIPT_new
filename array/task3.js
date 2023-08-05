const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
sum = 0;
count = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 == 0) {
        sum += arr[i];
        count++;
    }
}
console.log('3sum= ' + sum + " " + '3count = ' + count)