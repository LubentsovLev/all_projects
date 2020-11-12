let isAnagram = function (str1, str2) {
    str1 = str1.split('').sort().join('').toLowerCase()
    str2 = str2.split('').sort().join('').toLowerCase()
    return str1 === str2 ? true : false
};

console.log(isAnagram("hello", "jello"));
console.log(isAnagram("hello", "loelh"));
