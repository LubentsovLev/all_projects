const binaryMess =
  "01100100 01101111 01100111 01100100 01101111 01100111 01100100 01101111 01100111";
const resBinaryMes = (mess) =>
  mess
    .split(" ")
    .map((b) => parseInt(b, 2))
    .map((n) => String.fromCharCode(n))
    .join("");

console.log(resBinaryMes(binaryMess));

const isSummEven = (str) => {
  let num = str.split("");
  let numReduced = num.reduce((a, b) => +a + +b);
  let isEven = numReduced % 2 === 0 ? "yes" : "no";
  return console.log("count:", numReduced, "Even:", isEven);
};
isSummEven("12453");
