let arr = ["name", "Java", "Master", "tech"]


let filtered = arr.filter(function(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= "A" && str[i] <= "Z")
            return true
    }
    return false
});

console.log(filtered)