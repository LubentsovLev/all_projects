function findOdd(arr) {
  var count = {};
  arr.forEach(function (i) {
    count[i] = (count[i] || false) + 1;
  });
  for (var key in count) {
    if (count.hasOwnProperty(key)) {
      if (count[key] % 2 !== 0) {
        return Number(key);
      }
    }
  }
}
console.log(
  findOdd([30, 30, 30,5, 20, 1, -1, 2, -2, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])
);

