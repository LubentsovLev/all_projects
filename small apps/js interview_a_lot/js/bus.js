var number = function (busStops) {
  let L_into = [];
  let R_out = [];
  busStops.forEach(function (i) {
    L_into.push([i[0]]);
    R_out.push([i[1]]);
  });
  let lSum = L_into.reduce(function (a, b) {
    return +a + +b;
  });
  let RSum = R_out.reduce(function (a, b) {
    return +a + +b;
  });
  return lSum - RSum;
};

console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 8],
    [12, 2],
    [6, 1],
    [7, 8],
  ])
);
