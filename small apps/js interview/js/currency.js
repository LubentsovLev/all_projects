const input = [
  ["usd", "buy", 10000],
  ["usd", "sell", 5000],
  ["gbp", "buy", 9000],
  ["eur", "sell", 7000],
  ["uah", "buy", 10000],
  ["usd", "sell", 25000],
];

let result1 = (arr) => {
  let result1 = {};
  arr.forEach((i) => {
    debugger;
    let [currency, type, ammount] = i;

    if (!result1[currency]) {
      result1[currency] = [0, 0];
    }
    result1[currency][type === "buy" ? 0 : 1] += ammount;
  });
  return result1;
};

console.log(result1(input));

// let result2 = (arr) => {
//   return arr.reduce((a, b) => {
//       //debugger
//     a[b[0]] = a[b[0]] || [0, 0];
//     a[b[0]][b[1] === "buy" ? 0 : 1] += b[2];
//     return a
//   });
// };

// console.log(result2(input));
