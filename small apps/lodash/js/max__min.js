var total = [0, 1, 2, 3, 99, 100, 1000, 1, 2, 444, 1005, 1];
function _max(arr) {
  return arr.reduce((acc, curr) => {
    return acc > curr ? acc : curr;
  });
}
console.log(_max(total));

function _min(arr) {
  return arr.reduce((acc, curr) => {
    return acc < curr ? acc : curr;
  });
}
console.log(_min(total));

