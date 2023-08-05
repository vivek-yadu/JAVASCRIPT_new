const arr = [4, 8, 12, 20, 6]
let first = arr[0]
let last = arr[arr.length - 1]
if (first > last) {
    console.log("FIRST : " + first)
} else if (last > first) {
    console.log("LAST : " + last)
} else {
    console.log("SAME : " + first)
}