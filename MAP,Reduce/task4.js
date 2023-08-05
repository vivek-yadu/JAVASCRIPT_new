const num = [2, 3, 1, 4, 5, 6]
const arr = num.map((ele) => {
    if (ele % 2 == 0) {
        return ele
    } else
        return 0
})
console.log(arr)