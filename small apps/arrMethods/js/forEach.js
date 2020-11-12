const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers2 = [1, 2, 2, 3, 3, 4, 4, 1, 1, 1, 2, 2, 3, 4, 5, 10];

let count = {};

let numbersForEach = numbers2.forEach((item, index, arr) => {
  if (count[item]) {
    count[item]++;
  } else {
    count[item] = 1;
  }
});

console.log(count);
