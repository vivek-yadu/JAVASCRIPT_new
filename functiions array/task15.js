let data = [{ "name": "Jack", "country": "USA", "age": 35 },
    { "name": "Amit", "country": "India", "age": 38 },
    { "name": "Edward", "country": "USA", "age": 41 },
    { "name": "Vishal", "country": "India", "age": 30 },
    { "name": "Annie", "country": "USA", "age": 27 },
    { "name": "Preeti", "country": "India", "age": 25 },
    { "name": "Sophie", "country": "France", "age": 29 },
    { "name": "Harpreet", "country": "India", "age": 48 },
    { "name": "Bob", "country": "USA", "age": 21 }
]

data.sort(usingNameASC)

function usingNameASC(n1, n2) {
    let a = n1.name
    let b = n2.name
    return a.localeCompare(b);
}

console.log(data)

//15.2 
let data1 = [...data]
data1.sort(usingNameDESC)

function usingNameDESC(n1, n2) {
    let a = n1.name
    let b = n2.name
    return -1 * a.localeCompare(b);
}

console.log(data1)



//15.3
let data3 = [...data]
data3.sort(usingNameASC)

// function usingNameASC(n1, n2) {
//     let a = n1.name
//     let b = n2.name
//     return a.localeCompare(b);
// }
data3.sort(usingCountry)

function usingCountry(a, b) {
    let n1 = a.country;
    let n2 = b.country;
    return n1.localeCompare(n2)
}


console.log(data3)


//15.4
let data4 = [...data]
data4.sort(usingAge)
data4.sort(usingCountry);


function usingAge(a, b) {
    if (a.age > b.age)
        return 1;
    else if (a.age < b.age)
        return -1
    else
        return 0
}

console.log(data4)




//15.5
let data5 = [...data]
var newdata

function countryAgeArray(count) {
    newdata = data.filter((a) => {
        return a.country == count
    })
    return newdata
}
newdata.sort(byAge)

function byAge(a, b) {
    if (a.age < b.age) {
        return 1
    } else if (a.age > b.age) {
        return -1
    } else { return 0 }
}
console.log(newdata)