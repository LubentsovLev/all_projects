let str = "Can I use Google during the interview?";

String.prototype.flip = function() {
    let g = this
  strMD = this.split("").reverse();
  if ((strMD[0] === "!", "?", ".")) {
    strMD.push(strMD[0]);
    strMD = strMD.slice(1).join("");
    return strMD;
  }
};

console.log(str.flip());

let n1 = 111;
let n2 = new Number(123);// is Object
let n3 = Number(123);
n1.prop = true;
n2.prop = true;
n3.prop = true;
console.log(n1.prop);
console.log(n2.prop);
console.log(n3.prop)