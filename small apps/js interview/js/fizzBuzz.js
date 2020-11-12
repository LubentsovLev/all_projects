let fizzBuzz = (num) => {
  let arr = [];
  for (let i = 0; i < num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("fizzBuzz");
    } else if (i % 5 === 0) {
      arr.push("buzz");
    } else if (i % 3 === 0) {
      arr.push("fizz");
    } else {
      arr.push(i);
    }
  }
  return arr;
};
console.log(fizzBuzz(20));

function multiply(a = 1, b = 2) {
  return a * b;
}
console.log(multiply());

