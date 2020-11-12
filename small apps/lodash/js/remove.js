var arrayR = [1, 2, 3, 4,5,6,7,8,9,10];
function _remove(array, predicate) {
  const result = [];
  if (!(array != null && array.length)) {
    return result;
  }
  let index = -1;
  const indexes = [];
  const { length } = array;

  while (++index < length) {
    const value = array[index];
    if (predicate(value, index, array)) {
      result.push(value);
      indexes.push(index);
    }
  }
  array.length=0
  array.push(...indexes)
  let Narr = indexes
  return result;
}
const eventR = _remove(arrayR, function (n) {
    return n % 3 == 0
    
});
console.log(eventR);
console.log(arrayR);
