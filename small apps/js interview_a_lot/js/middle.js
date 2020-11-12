function getMiddle(s) {
  s = s.split("");
  let arr = [];
  let leng = s.length % 2 === 0 ? s.length / 2 - 2 : s.length / 2 - 1;
  arr.push(s[Math.floor(leng) + 1]);
  sRev = s.reverse();
  if (s.length % 2 === 0) {
    arr.push(sRev[Math.floor(leng) + 1]);
  }
  return arr.join('');
}
console.log(getMiddle("middle"));
