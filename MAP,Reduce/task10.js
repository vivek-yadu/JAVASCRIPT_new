let arr = [
    { "id": 101, "name": "Mark" },
    { "id": 105, "name": "Steve" },
    { "id": 78, "name": "James" }
]

let newArr = arr.map((ele) => {
    return "<p class='" + ele.id + "'>" + ele.name + "</p>"
}).join('')

console.log(newArr)