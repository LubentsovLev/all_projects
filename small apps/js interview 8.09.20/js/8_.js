let a = () => {
  let nArr = [];
  for (let i = 0; i < 5; i++) {
    nArr.push(Math.floor(Math.random() * 9) + 1);
  }
  return nArr;
};
console.log(a());

let a2 = new Array(5)
  .fill(null)
  .map((n) => (n = Math.floor(Math.random() * 9) + 1));
console.log(a2);
