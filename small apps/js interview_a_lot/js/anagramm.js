const anagram = (w1, w2) => {
  let first = w1.toUpperCase().split("").sort().join("");
  let second = w2.toUpperCase().split("").sort().join("");
  if (first === second) {
    return "yep";
  } else {
    return "nope";
  }
};

console.log(anagram("friend", "Finder"));
console.log(anagram("hello", "bye"));
console.log(anagram("hellofd", "hollefd"));
