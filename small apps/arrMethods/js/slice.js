const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sliceArr = (arr, start, end) => [...arr].slice(start, end);
let spliceArr = (arr, start, count) => {
    //debugger
  let array = [...arr].splice(start, count);
  return array;

};

console.log(sliceArr(numbers, 1, 5));
console.log(spliceArr(numbers, 0, 6));

console.log(numbers);
