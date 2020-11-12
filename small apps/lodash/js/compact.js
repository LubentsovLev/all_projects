let compact_arr = ["hello", "dude", false, NaN, 32, "",];

function _compact(array) {
  let resIndex = 0;
  const result = [];

  if (array == null) {
    return result;
  }
  for (const value of array) {
    if (value) {
      result[resIndex++] = value;
    }
  }
  return result;
}

console.log(_compact(compact_arr));
