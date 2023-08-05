// const numbers = [2, 5, 10, 12, 18, 21]

// let x = 21;
// let num1 = numbers.find((n) => {
//     isBig(n, x)
// })
// console.log("number = ", num1)
// let index = numbers.findIndex((n) => {
//     isBig(n, x)
// })
// console.log("index", index)
// let numArr = numbers.filter((n) => {
//     isBig(n, x)
// })
// console.log(numArr)

// function isBig(n, comp) {
//     return n > comp
// }


// const names = ['jack', 'Ana', 'Sam', 'Tim', 'Julia']
// const ch = 'A'

// function findname(namesArr, tofind) {
//     let name1 = namesArr.find((namesArr) => {
//         return isStart(namesArr, tofind)
//     });
//     return name1
// }
// console.log("using function ", findname(names, ch))

// function findIdx(namesArr, tofind) {
//     let index = namesArr.findIndex((namesArr) => {
//         return isStart(namesArr, tofind)
//     });
//     return index
// }
// console.log("using function ", findIdx(names, ch))

// function findArr(namesArr, tofind) {
//     let nameArr = namesArr.filter((namesArr) => {
//         return isStart(namesArr, tofind)
//     });
//     return nameArr
// }
// console.log("using function ", findArr(names, ch))

// function isStart(name, start) {
//     return name[0] == start;
// }


// const emps = [
//     { name: "Jack", city: 'Delhi', dept: 'Tech' },
//     { name: "Ana", city: 'London', dept: 'Tech' },
//     { name: "Sam", city: 'London', dept: 'HR' },
//     { name: "Tim", city: 'Delhi', dept: 'HR' },
//     { name: 'Bon', city: 'Delhi', dept: 'Tech' },
//     { name: 'Mary', city: 'London', dept: 'Tech' }
// ];

// let city = 'Delhi'
// let dept = 'HR'
// let emp1 = emps.find(function(emp) {
//     return emp.city == city && emp.dept == dept;
// });
// console.log(emp1)
// let index = emps.findIndex(function(emp) {
//     return emp.city == city && emp.dept == dept;
// });
// console.log(index)
// let empss = emps.filter(function(emp) {
//     return emp.city == city && emp.dept == dept;
// });
// console.log(empss)

const nums = [2, 10, 24, 5, 6]


// console.log(nums);
// console.log(nums.join('i'))
// console.log(nums.join(names.join(' & ')))


// const nums1 = [...nums]
// const names1 = [...names]
// console.log("nums = ", nums)
// console.log("nums1=", nums1)

// console.log("names= ", names)
// console.log('names1= ', names1)


// const newArr = [...nums]
// nums.sort(compNumbersASC)

// function compNumbersASC(num1, num2) {
//     if (num1 > num2)
//         return 1;
//     else if (num1 < num2)
//         return -1
//     else
//         return 0
// }


// console.log(newArr)
// console.log(nums)


// const newArr = [...nums]
// nums.sort(compNumbersDESC)

// function compNumbersDESC(num1, num2) {
//     if (num1 > num2)
//         return -1;
//     else if (num1 < num2)
//         return 1
//     else
//         return 0
// }


// nums.sort(compNumbersDESC)

// console.log(newArr)
// console.log(nums)

// const names = ['jack', 'Bob', 'Mary']
// const nameCopy = [...names]

// nameCopy.sort(compLengthASC)

// function compLengthASC(str1, str2) {
//     let len1 = str1.length;
//     let len2 = str2.length;
//     if (len1 > len2)
//         return 1;
//     else if (len1 < len2)
//         return -1;
//     else
//         return 0
// }
// console.log(names)
// console.log(nameCopy)


// const sales = [
//     { name: 'Pepsi', qty: 20, price: 15 },
//     { name: 'Coke', qty: 15, price: 10 },
//     { name: 'Maggi', qty: 10, price: 12 },
//     { name: 'Colgate', qty: 6, price: 60 },
//     { name: 'Nescafe', qty: 30, price: 9 }
// ]
// const salesData = [...sales]
// salesData.sort(compValueDesc);

// function compValueDesc(pr1, pr2) {
//     let v1 = pr1.qty * pr1.price
//     let v2 = pr2.qty * pr2.price
//     if (v1 > v2)
//         return -1;
//     else if (v2 > v1)
//         return 1
//     else
//         return 0
// }

// console.log(sales)
// console.log(salesData)


// const students = [
//     { name: 'Jack', marks1: 33, marks2: 25 },
//     { name: 'Bob', marks1: 40, marks2: 32 },
//     { name: 'Mary', marks1: 41, marks2: 40 },
//     { name: 'Tom', marks1: 24, marks2: 25 },
//     { name: 'Harry', marks1: 30, marks2: 35 },
//     { name: 'Anna', marks1: 32, marks2: 37 },
// ]

// let mincut = 59;


// function getStData(arr, cut) {
//     //filter and thes sort in desc
//     let arr1 = arr.filter(function(st) {
//         return (st.marks1 + st.marks2) > cut;
//     });
//     arr1.sort(compTotalDesc);
//     return arr1
// }

// const farr = getStData(students, mincut)
// console.log(farr)

// function compTotalDesc(st1, st2) {
//     let tot1 = st1.marks1 + st1.marks2;
//     let tot2 = st2.marks1 + st2.marks2;
//     if (tot1 > tot2)
//         return -1;
//     else if (tot1 < tot2)
//         return 1
//     else
//         return 0;
// }



// const arr = [21, 43, 1, 3, 41, 5, 61];
// let findn = arr.find(function(n) {
//     return n % 2 == 0
// })

// let findIdx = arr.findIndex(function(n) {
//     return n % 2 == 0
// })
// console.log(findn)

// console.log(findIdx)