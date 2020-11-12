let pushw = document.querySelector(".pushW");
let deleteW = document.querySelector(".deleteW");
let w = document.querySelector(".w");

let k = 0;
while (k < 5) {
  //console.log("k :" + k);
  k++;
}

let sum = 0;
let p = 0;
while (p < 5) {
  p++;
  sum = sum + p;
}
//console.log(sum);

p = 0;
let square = ""
while (p < 20) {
  let plus = 0
  while (plus < p){
    square +="*"
    plus++;
  }
  square += "<br>"
  p++
}

let showW = () => {
  return w.innerHTML = square;
}
let removeW = () => {
  return w.innerHTML = '';
}

pushw.onclick = showW
deleteW.onclick = removeW
