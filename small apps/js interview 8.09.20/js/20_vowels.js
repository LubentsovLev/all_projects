let vowels = ["a", "e", "i", "o", "u"];
let findVowels = (w) => {
  w = w.split("");
  nArr = [];
  for (let i = 0; i < w.length; i++) {
    if (vowels.includes(w[i])) {
      nArr.push(w[i]);
    }
  }
  b = 0;
  for (let i = 0; i < w.length; i++) {
    let NNarr = [...nArr].reverse();
    if (NNarr.includes(w[i])) {
      w[i] = NNarr[b];
      b++;
    }
  }
  return w.join('')
};
console.log(findVowels("sauce"));
console.log(findVowels("javascript"));

let obj = {
    'a': 'three', // => everyObject is converting to string 
    b: 4,
    'c': "five",
    a: 3,
    'b': "four",
    "c": 'five',
    "a": "tre",
    "b": 'fyra',
    c: 5
};
console.log(obj);