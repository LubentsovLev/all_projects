let arr1 = [7, 5, 3, 2, 5, 78, 77, 214, 2, 5656];
let nArr1 = [
  { one: 1, two: 1 },
  { one: 8, two: 5 },
  { one: 3, two: 4 },
];

let arr2 = [...arr1].sort(function (a, b) {
  let g = a - b;
  return a - b;
});
console.log(arr1);
console.log(arr2);

let nArr2 = [...nArr1].sort((a, b) => {
  return a.two - b.two;
});
console.log(nArr1);
console.log(nArr2);