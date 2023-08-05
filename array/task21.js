const arr = ['Jack', 'Bob', 'Ed', 'Steve']

function findRemove(arr, char) {
    let index = arr.indexOf(char)
    if (index >= 0) {
        arr.splice(index, 1)
    }
    return arr
}

console.log(findRemove(arr, 'Bob'))