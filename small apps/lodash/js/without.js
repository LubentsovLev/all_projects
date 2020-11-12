var arrayU = [1, 2, 2, 2, 3, 41, 3, 3, 4, 5, 4, 4, 41, 11, 1, 1, 55,2,2,2,2,1,1,1,1];
function _uniq_3(arr, value) {
  var seen = {};
  seen[value] = {};
  let filteredArr = arr.filter(function (value) {
    return seen.hasOwnProperty(value) ? (seen[value] = true) : false;
  });
  return filteredArr.length
}
console.log(_uniq_3(arrayU, 1));
