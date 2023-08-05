var people = [{ "name": "Mary", "city": "London" },
    { "name": "Anita", "city": "Paris" },
    { "name": "Edward", "city": "New York" },
    { "name": "Thomas", "city": "Rome" },
    { "name": "Robin", "city": "Seattle" },
    { "name": "Sophia", "city": "Los Angeles" },
    { "name": "Bruce", "city": "Delhi" }
];

var continentArray = [
    { "city": "London", "continent": "Europe" },
    { "city": "Delhi", "continent": "Asia" },
    { "city": "Seattle", "continent": "North America" },
    { "city": "Paris", "continent": "Europe" },
    { "city": "New York", "continent": "North America" },
    { "city": "Rome", "continent": "Europe" },
    { "city": "Bengaluru", "continent": "Asia" },
    { "city": "Los Angeles", "continent": "North America" }
];


function InContinent(peopleArray, continentArray, continent) {
    let newArr = peopleArray.filter((person) => {
        let city = continentArray.find((a) => { return a.city == person.city });
        return city.continent == continent;
    });
    return newArr
}

// console.log(InContinent(people, continentArray, 'Asia'))


function byContinent(peopleArray, continentArray) {
    let newArr = peopleArray.sort(inASC)

    function inASC(a, b) {
        let con1 = continentArray.find((st) => {
            return st.city == a.city
        })

        let con2 = continentArray.find((st1) => {
            return st1.city == b.city
        })

        if (con1.continent > con2.continent)
            return 1
        else if (con2.continent > con1.continent)
            return -1
        else
            return 0
    }
    return newArr
}

console.log(byContinent(people, continentArray))