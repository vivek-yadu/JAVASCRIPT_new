const num = [2, 3, 1, 4, 5, 6]
const arr = num.map((ele) => {
    if (ele % 2 == 0) {
        return "even"
    } else
        return "odd"
})
console.log(arr)