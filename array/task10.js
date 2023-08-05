const arr1 = [1, 2, 3, 4, 2, 1]
const arr2 = [1, 2, 3, 4, 2, 1]
let sum1 = 0
let sum2 = 0
for (let i = 0; i < arr1.length; i++) {
    sum1 += arr1[i];
}
for (let i = 0; i < arr2.length; i++) {
    sum2 += arr2[i]
}

if (sum1 > sum2) {
    console.log("Big1")
} else if (sum2 > sum1) {
    console.log("Big2")
} else {
    console.log("Equal")
}