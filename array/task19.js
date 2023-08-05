function printElements(arr) {
    let newStr = ""
    while (arr.length > 0) {
        let temp = arr.shift()
        newStr += temp + " "
    }
    return newStr
}

const arr = [1, 2, 3, 4, 5, 6, 10]
console.log("Shift=" + printElements(arr))