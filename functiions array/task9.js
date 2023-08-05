let jsonArr = [{ "name": "Jack", "tech": "Android" },
    { "name": "Mary", "tech": "React" },
    { "name": "Bob", "tech": "Angular" },
    { "name": "Steve", "tech": "Spring" },
    { "name": "James", "tech": "Android" },
    { "name": "Julia", "tech": "Android" },
    { "name": "Michel", "tech": "React" },
    { "name": "Bill", "tech": "Angular" },
    { "name": "Sonny", "tech": "Spring" },
    { "name": "Martins", "tech": "React" },
    { "name": "Bruce", "tech": "Angular" },
    { "name": "Sam", "tech": "Spring" }
];

function filterArray(compJSON, str, isfalseOrTrue) {
    if (isfalseOrTrue) {
        return compJSON.filter(x => x.name === str);
    } else {
        return compJSON.filter(x => x.tech === str);
    }
}


console.log(filterArray(jsonArr, "React", false));
console.log(filterArray(jsonArr, "Bob", true));