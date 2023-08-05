let email = 'sdf@m2.com'
let atIndex = email.indexOf("@");
let dotIndex = email.lastIndexOf(".");
let s1 = email.substring(0, atIndex);
let s2 = email.substring(atIndex + 1, dotIndex);
if ((atIndex == -1 || dotIndex == -1) || (atIndex > dotIndex) || (atIndex == 0 || dotIndex == email.length - 1) || (s1.length == 0 || s2.length == 0)) {
    console.log("Not Proper");
} else {
    console.log("Proper");
}