let isInt = function (num) {
    let g = parseInt(num)
  if (Number(num) && parseInt(num) === num) {
    return true;
  }
  else return false
};

console.log(isInt(3.5));

console.log(isInt(3));

console.log(isInt(3.00000));
