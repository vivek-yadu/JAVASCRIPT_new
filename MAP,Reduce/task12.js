const data = [{ "fname": "Jack", "lname": "Smith", "city": "London" },
    { "fname": "Mary", "lname": "Markle", "city": "Amsterdam" },
    { "fname": "Ed", "lname": "May", "city": "Paris" },
    { "fname": "Tim", "lname": "Gates", "city": "Rome" }
]

const citiesArr = data.map((ele) => {
    return ele.city;
})

console.log(citiesArr)