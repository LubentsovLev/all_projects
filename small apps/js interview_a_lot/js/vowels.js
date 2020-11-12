const vowels = ["a", "e", "i", "o", "u"];

const vowelsCount = (str) => {
  var arr = [];
  str.split("").filter(function (item) {
    if(vowels.includes(item)){
        str[item] = true
        arr.push(item)
    }
  })
  return arr.length
};
function findVowels2(str) {
    const matched = str.match(/[aeiou]/gi);
    return matched ? matched.length : 0;
  }
console.log(vowelsCount("england"));
console.log(findVowels2("england"));
