const xAndO = (str) => {
  str = str.toLowerCase().split("");
  result1 = 0;
  result2 = 0;
  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] === "x") {
      result1++;
    } else if (str[i] === "o") {
      result2++;
    } else {
      null;
    }
  }
  result = result1 === result2 ? true : false;
  return result;
};

console.log(xAndO("XoxOzxo"));
