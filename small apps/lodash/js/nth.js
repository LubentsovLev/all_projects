var arrayNth = ["a", "b", "c", "d"];

function _nth(array, n) {
  const length = array == null ? 0 : array.length;
  if (!length) {
    return;
  }
  return (n, length) ? array[n] : undefined;
}

function _nthTheSame(array, n) {
    return array[n]
  }

console.log(_nthTheSame(arrayNth, 1));
