function digital_root(n) {
  let num = (n) => {
    n = n.toString().split("");
    n = n.reduce((a, b) => +a + +b);
    return n;
  };

  return n <= 9 ? num(n) : digital_root(num(n));
}

console.log(digital_root(493193));
