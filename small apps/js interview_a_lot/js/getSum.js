function getSum(a, b) {
  let newArr = [];
  for (i = a; i <= b; i++) {
    newArr.push(i);
  }
  return newArr.reduce((a, b) => a + b);
}
console.log(getSum(1, 4));
