const strarr = ["Mark", "James", "Martha"]
const arr1 = strarr.map((ele) => {
    return '<li>' + ele + '</li>'
})

console.log("<ul>" + arr1 + "</ul>")