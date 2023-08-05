let newArr = [{ name: "Bob", Maths: 82, Computers: 88 },
    { name: "Jack", Maths: 44, Computers: 55 },
    { name: "Mary", Maths: 91, Computers: 73 },
    { name: "Dave", Maths: 60, Computers: 89 },
    { name: "Julia", Maths: 58, Computers: 60 },
    { name: "Steve", Maths: 42, Computers: 47 },
]
const html = newArr.map(ele => {
    return `<tr><td>${ele.name}</td><td>${ele.Maths}</td><td>${ele.Computers}</td></tr>`;
}).join('');

console.log(html);