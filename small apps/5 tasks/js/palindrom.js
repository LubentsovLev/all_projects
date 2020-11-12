
const palindrom = (str) => {
  str = str.toLowerCase();
  return str == str.split("").reverse().join("")
    ? `yes, --${str}--  is palindrom`
    : `no, --${str}-- isn't palindrom`;
  // let str2 = str.split("");
  // str2 = str2.reverse();
  // str2 = str2.join('');
  // if (str == str2) return true
  // else return false
};
console.log(palindrom("ellle"));
