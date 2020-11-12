function squareDigits(num) {
  arr = [];
  num = num.toString().split("");
  num.forEach((i) => {
    arr.push(i ** 2);
  });
  return arr.join("");
}
console.log(squareDigits(9119));

