const DPArr = [1, 2, 1, 2, 3, 3, 5, 5, 23, 45, 234234, 21,1,1,1,1];

const duplicateM = (arr) => {
  var seen = {};
  let b =  arr.filter(function (item) {
    return seen.hasOwnProperty(item) ? false : (seen[item] = true);
  });
  return b.length
};

console.log(duplicateM(DPArr));
