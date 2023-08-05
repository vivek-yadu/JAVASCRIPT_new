let arr = [{ "name": "Mark", "age": 23 },
    { "name": "Steve", "age": 28 },
    { "name": "Mary", "age": 25 },
    { "name": "Bill", "age": 34 }
]
let newArr = arr.map((ele) => {
    return ele.name + " is " + ele.age + "Years old"
})
console.log(newArr)