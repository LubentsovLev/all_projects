function isIsogram(str) {
  //debugger
  str = str.toLowerCase().split("");
  let arr = [];
  let arr1 = 0;
  for (let i = 0; i <= str.length; i++) {
    if (arr.includes(str[i])) {
      arr1++;
    }
    arr.push(str[i]);
  }
  return arr1 ? false : true;
}
console.log(isIsogram("abcdjhg"));
