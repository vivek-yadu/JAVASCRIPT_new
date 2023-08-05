function printElements(arr) {
    let newStr = ""
    while (arr.length > 0) {
        let temp = arr.pop()
        newStr += temp + " "
    }
    return newStr
}

const arr = [1, 2, 3, 4, 5, 6, 10]
console.log("Pop=" + printElements(arr))