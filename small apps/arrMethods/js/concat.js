const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const b = [1, 4, 5, 6, 7, 8, 9, 232];

const concatArrays = (arr1, arr2) => {
    debugger
  let newArr = arr1.concat(arr2);
  let sortedArr = newArr.sort((a,b) => {
      return a - b
  })
  return sortedArr;
};
console.log(concatArrays(a, b));
