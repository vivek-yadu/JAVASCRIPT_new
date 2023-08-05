var str = "qw2B**5g"
let lowerCase = "";
let digits = "";
let upperCase = "";

for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'a' && str[i] <= 'z') {
        lowerCase += str[i];
    } else if (str[i] >= '0' && str[i] <= '9') {
        digits += str[i];
    } else if (str[i] >= 'A' && str[i] <= 'Z') {
        upperCase += str[i];
    }
}

console.log(lowerCase + digits + upperCase)