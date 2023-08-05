let arr1 = [5, 18, 26, 30]
let arr2 = [101, 102]
let newArr = []
let len1 = arr1.length
let len2 = arr2.length
let maxLen = arr1.length + arr2.length
for (let i = 0; i < maxLen; i++) {
    if (len1 != 0) {
        newArr.push(arr1[i])
        len1--
    }
    if (len2 != 0) {
        newArr.push(arr2[i])
        len2--
    }


}
console.log(newArr);