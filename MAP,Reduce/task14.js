let arr = [1, 2, 3]



let sum = arr.reduce((acc, curr) => {
    return acc + curr
}, 0)
console.log(sum)



let arr1 = [1, 3, 4, 5]
let product = arr1.reduce((acc, curr) => {
    return acc * curr
})
console.log(product)




let arr2 = [...arr1]

let maxNum = arr2.reduce((acc, curr) => {
    if (acc < curr) {
        return curr
    } else
        return acc
}, 0)

console.log(maxNum)




let arr3 = [...arr2]
let init = arr3[0]
let minNum = arr3.reduce((acc, curr) => {
    if (acc < curr)
        return acc
    else
        return curr

}, init)

console.log(minNum)



let arr4 = [1, 21, 3, 1, 4, 423, 42, 2]
let numGreaterthan10 = arr4.reduce((acc, curr) => {
    if (curr > 10) {
        return acc + 1
    } else
        return acc
}, 0)

console.log(numGreaterthan10)