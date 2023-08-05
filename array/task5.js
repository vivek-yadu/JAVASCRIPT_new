const arr = [5, 18, 26, 30, 40, 6]
let count = 0;
const newarr = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 21) {
        count++;
        newarr.push(arr[i])
    }
}

console.log("Count =" + count + "\n" + "Values =" + newarr)