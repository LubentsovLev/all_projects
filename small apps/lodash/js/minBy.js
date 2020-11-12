var objects = [{ n: 1 }, { n: 0 }];
function _minBy(array, iteratee) {
  let result;
  if (array == null) {
    return result;
  }
  let computed;
  for (const value of array) {
    const current = iteratee(value);

    if (
      current != null &&
      (computed === undefined
        ? current === current
        : current < computed)
    ) {
      computed = current;
      result = value;
    }
  }
  return result;
}
console.log(_minBy(objects,  function(o) { return o.n; }))
