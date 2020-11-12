const util = {
  trim(word) {return word ? word.trim() : ""},
  length(word) {return word ? word.length : ""},
  replace(word, w, rep) {return word ? (word.includes(w) ? word.replace(w, rep) : "") : ""},
  slice(arr, w1,w2) {return arr.slice(w1,w2)},
  join(arr,meth){return arr.join(meth)},
  toFixed(num,count){return num.toFixed(count? count : 0 )}
};
console.log(util.trim("             f f mw   "));
console.log(util.length("ggtg"));
console.log(util.replace('vladilen', 'v', 'V'));
console.log(util.slice([1, 2, 3, 4, 5], 2, 4));
console.log(util.join(['Java', 'Script'], ''));
console.log(util.toFixed(Math.PI, '2'));
console.log(util.toFixed(Math.E) );