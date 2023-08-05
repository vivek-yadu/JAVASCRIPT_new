let arr = ["JavaScript", "Hello", "React", "Java", "Python", "C", "Node"]
arr.sort(sortDict);

function sortDict(a, b) {
    return a.localeCompare(b);
}
console.log(arr)



let arr2 = [...arr];
arr2.sort(sortDictDesc)

function sortDictDesc(a, b) {
    return -1 * a.localeCompare(b)
}
console.log(arr2)



let arr3 = [...arr]
arr3.sort(lengthAsc)

function lengthAsc(a, b) {
    let len1 = a.length
    let len2 = b.length
    if (len1 > len2)
        return 1;
    else if (len1 < len2)
        return -1
    else
        return 0
}
console.log(arr3)



let arr4 = [...arr]
arr4.sort(lengthDESC)

function lengthDESC(a, b) {
    let len1 = a.length
    let len2 = b.length
    if (len1 < len2)
        return 1;
    else if (len1 > len2)
        return -1
    else
        return 0
}
console.log(arr4)