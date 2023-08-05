const num = [2, 3, 1, 4, 5, 6]
const arr = num.map((ele) => {
    return ele * ele
})
console.log(arr)


const numbers = [3, 10, -5, 0, -22, 6]
const newArr = numbers.map((ele) => {
    if (ele >= 0)
        return ele
    else
        return -1 * ele
})
console.log(newArr)


const strarr = ['Hi', 'XYZ', 'bye', 'A']

const arr1 = strarr.map((ele) => {
    return '<p>' + ele + '</p>  '
})

console.log(arr1)



const strArr = ['hi', 'hello', 'bye', 'Good', 'A']
let maxlen = 3
const arr2 = strArr.map((ele) => {
    if (ele.length <= maxlen) {
        return ele
    } else {
        return ele.substring(0, maxlen)
    }
})

console.log(arr2)


const prod = [
    { name: 'pepsi', qty: 20, price: 15 },
    { name: 'Coke', qty: 15, price: 10 },
    { name: 'Maggi', qty: 10, price: 12 },
    { name: 'Colgate', qty: 6, price: 60 },
    { name: 'Perk', qty: 20, price: 5 }
]

const arr4 = prod.map(function(ele) {
    let v1 = ele.qty * ele.price
    let json1 = { name: ele.name, value: v1 }
    return json1;
})
console.log(arr4)



arr4.sort((p1, p2) => {
    if (p1.value > p2.value)
        return -1
    else if (p1.value < p2.value)
        return 1
    else
        return 0
})

console.log(arr4)


const names = ['jack', 'Bob Smith', 'Ana Cook', 'Tim']

// let arr5 = names.map(function(ele) {

//     let index = name.indexOf('');
//     let json = {};
//     if (index < 0) {
//         json.firstName = name;
//         json.lastName = ''
//     } else {
//         json.firstName = name.substring(0, index);
//         json.lastName = name.substring(index + 1);
//     }
//     return json;
// })
// console.log(arr5)



//1-b-1


const nums = [2, 3, 4, 5]
let sum = nums.reduce((acc, curr) => {
    let cube = curr * curr * curr;
    return acc + cube
}, 0);
console.log(sum)

//b-2

const num1 = [...nums]
let max = num1.reduce((acc, curr) => {
    if (acc < curr) {
        return curr;
    } else
        return acc;
}, 0)

console.log(max)


//b-3

const arr6 = [...names]
var val = arr6[0]
let smallstr = arr6.reduce((acc, curr) => {
    if (curr.length < acc.length)
        return curr
    else
        return acc
}, val)

console.log(smallstr)



const prod1 = [
    { name: 'pepsi', qty: 20, price: 1 },
    { name: 'Coke', qty: 15, price: 1 },
    { name: 'Maggi', qty: 10, price: 1 },
    { name: 'Colgate', qty: 6, price: 1 },
    { name: 'Perk', qty: 20, price: 1 }
]

let totalSales = prod1.reduce((acc, curr) => {
    let v1 = curr.qty * curr.price;
    return v1 + acc;
}, 0)

console.log(totalSales);

//b-4

const prods = [...prod]
let maxProd = prods.reduce((acc, curr) => {
    let v1 = curr.qty * curr.price;
    let accValue = acc.qty * acc.price;
    if (v1 > accValue)
        return curr;
    else
        return acc;
});

console.log(maxProd)