const arr = [2, 3, 5, 7]
let n = 10;
let newarr = [];
for (let i = 0; i < arr.length; i++) {
    let temp = arr[i] + n;
    newarr.push(temp)
}

console.log(newarr)