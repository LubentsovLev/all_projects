function binaryArrayToNumber(arr) {
  arr = arr.join("");
  let g = parseInt(arr, 2).toString(10);
  return g;
}
console.log(binaryArrayToNumber([0, 1, 1, 0]));
