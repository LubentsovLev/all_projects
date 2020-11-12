function duplicateEncode(word) {
  word = word.toLowerCase().split("");
  let jArr = [];
  let jArr2 = [];
  for (let i = 0; i < word.length; i++) {
    if (jArr2[word[i]]) {
      jArr2[word[i]] += 1;
    } else {
      jArr2[word[i]] = 1;
    }
  }
  for (let i = 0; i < word.length; i++) {
    let g = jArr2[word[i]];
    if (jArr2[word[i]] === 1) {
      jArr.push("(");
    } else {
      jArr.push(")");
    }
  }
  return jArr.join("");
}
console.log(duplicateEncode("Success"));
