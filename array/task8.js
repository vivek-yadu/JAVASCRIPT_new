const arr = [9, 3, 2, 4]
const newarr = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        let temp = arr[i];
        newarr.push(temp)
    } else if (arr[i] % 2 == 1) {
        let temp = arr[i] + 1
        newarr.push(temp)
    }
}
console.log(newarr)