const Array = [{ "fname": "Jack", "lname": "Smith", "city": "London" },
    { "fname": "Mary", "lname": "Markle", "city": "Amsterdam" },
    { "fname": "Ed", "lname": "May", "city": "Paris" },
    { "fname": "Tim", "lname": "Gates", "city": "Rome" }
];


const arr4 = Array.map(function(ele) {
    let fullname = ele.fname + " " + ele.lname
    let json1 = { fname: ele.fname, lname: ele.lname, fullname: fullname, city: ele.city }
    return json1;
})
console.log(arr4)