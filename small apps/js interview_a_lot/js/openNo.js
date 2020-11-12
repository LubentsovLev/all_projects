const openNo = (args) => {
  //debugger;
  let result = [];
  for (let i = 0; i <= args.length - 1; i++) {
    if (args[i][0] >= 55 && args[i][1] >= 7) {
      result.push("senior");
    } else {
      result.push("open");
    }
  }
  return result;
};

console.log(
  openNo([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
);
