function sumTwoSmallestNumbers(numbers) {
  let newArr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
    } else {
      newArr.push(numbers[i]);
    }
  }
  newArr = newArr.sort((a, b) => a - b);
  return newArr[0] + newArr[1]  ;
}
console.log(sumTwoSmallestNumbers([-1, -22, 15, 28, 4, 2, 43]));
