// function matrix(w, h) {
//   let randArr = [];
//   for (let i = 0; i < 100; i++) {
//     let r = Math.floor(Math.random() * 100) + 1;
//     r < 10 ? (r = "0" + r) : toString(r);
//     if (randArr.includes(r)) {
//       randArr.push(r + Math.floor(Math.random() * 5));
//     } else {
//       randArr.push(r);
//     }
//   }
//   debugger
//   let g = [...randArr]
//   let result = new Array(h).fill(v).map(() => new Array(w).fill());
//   return result;
// }
// console.log(matrix(10, 10));

var globalArr = [];
let countArr = [];
var rowArr = 10;
var colArr = 10;
let countNum = 0;
for (var i = 0; i <= 99; i++) {
  countArr.push(i);
}
countArr = countArr.sort(function () {
  return Math.random() - 0.5;
});
for (var i = 0; i < rowArr; i++) {
  var row = [];
  for (var j = 0; j < colArr; j++) {
    debugger
    row.push(countArr[countNum]);
    countNum++;
  }
  globalArr.push(row);
}
console.log(globalArr);
