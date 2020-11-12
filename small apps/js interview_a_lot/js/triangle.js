function isTriangle(a, b, c) {
  if (a + b > c && b + c > a && a + c > b) {
    return true;
  } else {
    return false;
  }
}
console.log(isTriangle(3, 4, 6));
