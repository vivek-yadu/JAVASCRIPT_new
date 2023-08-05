let array = [10, 12, 14];
let count = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0 || array[i] % 3 == 0 || array[i] % 5 == 0 || array[i] % 7 == 0) {
        count++;
    }
}

console.log(count);