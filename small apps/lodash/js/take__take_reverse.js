var arrayU = [1, 2, 2, 2, 3, 41, 3, 3, 4, 5, 4, 4, 41, 11, 1, 1, 55];
let u = [];
function _slice(array, start, end) {
  length = end - start;
  let index = -1;
  const result = new Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}
function _slice_reverse(array, start, end) {
  length = end - start;
  let index = -1;
  const result = new Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result.reverse();
}
function _take(array, n = array.length) {
  return _slice(array, 0, n < 0 ? 0 : n);
}
function _takeRight(array, n = array.length) {
  array.reverse();
  return _slice_reverse(array, 0, n < 0 ? 0 : n);
}
console.log(_take(arrayU, 10));

console.log(_takeRight(arrayU, 1));
