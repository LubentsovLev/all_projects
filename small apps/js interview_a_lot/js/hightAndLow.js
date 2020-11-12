function hightAndLow(nums) {
  //debugger;
  nums = nums.split(" ").sort((a, b) => a - b);
  return `${nums[0]} ${nums[nums.length-1]} `
}
console.log(hightAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));
