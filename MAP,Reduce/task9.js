let arr = [
    { "id": 101, "name": "Mark" },
    { "id": 105, "name": "Steve" },
    { "id": 78, "name": "James" }
]

let newArr = arr.map((ele) => {
    return `<button onClick=clicked(${ele.id})>${ele.name}</button>`
})

console.log(newArr)