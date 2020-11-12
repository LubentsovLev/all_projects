let sumOfTwo = (arr, target) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push(i);
        result.push(j);
      }
    }
  }
  return result;
};

console.log(sumOfTwo([2, 3, 234, 44], 47));
