const arr = ["string1", "string2", "string3"];
const concatenated = arr.reduce((acc, curr) => {
    return acc + "::" + curr
});
console.log(concatenated);



const arr1 = ["string1", "string2", "string3"];

const total = arr.reduce((acc, curr) => {
    return acc + curr.length
}, 0);
console.log(total);



const arr2 = ["string1", "iyiy", "hhahha"];
const firstChars = arr2.reduce((acc, curr) => {
    return acc + curr[0]
}, "");
console.log(firstChars);