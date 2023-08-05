let arr = ["name", "J", "Master", "tech"]


let filtered = arr.filter(function(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= "a" && str[i] <= "c")
            return true
    }
    return false
});

console.log(filtered)