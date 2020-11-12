function params(a, b,c) {
  if (arguments.length === params.length) {
    return "yeah";
  } else {
    return "no dude";
  }
}

console.log(params(1));
console.log(params(1,2));
console.log(params(1,3,2));
