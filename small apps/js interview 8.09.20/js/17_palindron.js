let palindrome = function (w) {
  let leng = w.length;
  let start = w.substring(0 , Math.floor(leng / 2)).toLowerCase();
  let end = w.substring(leng - Math.floor(leng / 2)).toLowerCase();
  return start === end;
};
console.log(palindrome("lllolll"));
