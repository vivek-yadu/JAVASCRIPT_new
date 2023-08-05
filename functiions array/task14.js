let data = [
    { "name": "Jack", "maths": 55, "english": 60, "science": 62 },
    { "name": "Anita", "maths": 62, "english": 65, "science": 56 },
    { "name": "Thomas", "maths": 68, "english": 58, "science": 54 },
    { "name": "Steve", "maths": 51, "english": 56, "science": 68 },
    { "name": "Julia", "maths": 47, "english": 77, "science": 72 },
    { "name": "Mary", "maths": 72, "english": 55, "science": 60 }
];

data.sort(nameASC)

function nameASC(a, b) {
    let a1 = a.name
    let b1 = b.name
    return a1.localeCompare(b1)
}

console.log(data)

//14.2

let data1 = [...data]
data1.sort(nameDESC)

function nameDESC(a, b) {
    let a1 = a.name
    let b1 = b.name
    return -1 * a1.localeCompare(b1)
}

console.log(data1)


//14.3

let data3 = [...data]
data3.sort(totalMarkASC)

function totalMarkASC(a, b) {
    let m1 = a.english + a.science + a.maths
    let m2 = b.english + b.science + b.maths

    if (m1 > m2)
        return 1;
    else if (m1 < m2)
        return -1
    else
        return 0
}

console.log(data3)


//14.4
let data4 = [...data]
data4.sort(totalMarkDESC)

function totalMarkDESC(a, b) {
    let m1 = a.english + a.science + a.maths
    let m2 = b.english + b.science + b.maths

    if (m1 > m2)
        return 1;
    else if (m1 < m2)
        return -1
    else
        return 0
}

console.log(data4)