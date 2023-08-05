const arr = ['Jack', 'Mary']
let str = "Hello"
let newarr = []
for (let i = 0; i < arr.length; i++) {
    let temp = str + " " + arr[i]
    newarr.push(temp)
}
console.log(newarr)