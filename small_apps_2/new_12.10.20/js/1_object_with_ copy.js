let arr = [
  [1, 4, 8, 9],
  [6, 2, 11, 1],
  [8, 0, 3, -5],
  [-2, 10, 8, 1],
];
// let nArr = [];

// let diagNums = () => {
//   let a = 0;
//   for (let i = 1; i < arr.length; i++) {
//     nArr.push(arr[i][i]);
//     a = a + 4;
//   }
// };
let nArr = arr.forEach(function (row, i ) {
  row.forEach
});

let diagNums = () => {
  let a = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      debugger
      console.log(arr[i][j]);
    }
  }
};
diagNums();
console.log(nArr);
