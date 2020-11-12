var total = [0, 1, 2, 3, 99, 100, 1000, 1, 2, 444, 050, 1];
let summ = total.reduce(function (a, b) {
  return a + b;
});
let max = total.reduce((acc, curr) => {
  return acc > curr ? acc : curr; // Перепресваивание самого большого числа
});
console.log(summ);
console.log(max);
