var total = [0, 1, 2, 3, 99, 100, 1000, 1, 2, 444, 1005, 1];
function _max(arr) {
  return arr.reduce((acc, curr) => {
    return Math.ceil((acc + curr) / arr.length);
  });
}
console.log(_max(total));

function _multiply(val1, val2) {
  return val1 * val2;
}
console.log(_multiply(100, 20));

function _subtract(val1, val2) {
  return val1 - val2;
}
console.log(_subtract(100, 20));

function _summ(arr) {
  return arr.reduce((acc, curr) => {
    return Math.ceil(acc + curr);
  });
}
console.log(_summ(total));

function _random(n1, n2) {
  let middle = n2 - n1;
  let arr = Array(middle).fill().map((middle, i)  =>  i + 1 );
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}
//Math.floor(Math.random() * arr.length);

console.log(_random(10, 23));
