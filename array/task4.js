const arr = [1, 3, 2, 4]
let evensum = 0;
let oddsum = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        evensum += arr[i];
    } else {
        oddsum += arr[i]
    }
}
console.log('even sum= ' + evensum + "\n" + 'odd sum = ' + oddsum)