const SNArr = [1, 2, 1, 2, 3, 3, 5, 5, 23];

let singleNumberEl = (nums) => {
  let uniq = new Set();
  let uniqSum = 0;
  let numSum = 0;
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    if (!uniq.has(curr)) {
      uniq.add(curr);
      uniqSum += curr;
    }
    numSum += curr;
  }
  return uniqSum * 2 - numSum;
};

console.log(singleNumberEl(SNArr));

let singleNumberEl2 = (nums) => {
  let uniq = Array.from(new Set(nums));
  let uniqSum = uniq.reduce((a, b) => a + b);
  let numSum = nums.reduce((a, b) => a + b);
  return uniqSum * 2 - numSum;
};

console.log(singleNumberEl2(SNArr));
