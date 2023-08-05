let arr = [1, 3, 5, 7, 9, 11];
let num = 6;
for (let i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
        arr.splice(i, 0, num);
        break;
    }
}

console.log(arr)