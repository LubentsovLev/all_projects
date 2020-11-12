const names = ["florida", "california", "florida", "NYC", "Utah"];

const find = (arr, val) => {
  if (
    arr.find((i) => {
      return i === val;
    })
  ) {
    return true;
  } else return false;
};
console.log(find(names, "NYfC"));

const findIndex = (arr, func) => {
    return arr.findIndex(func)
}
function findFunc (v) {
    return v === 'Utah'
}
console.log(findIndex(names, findFunc ));