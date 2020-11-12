let pushA2 = document.querySelector(".pushA2");
let deleteA2 = document.querySelector(".deleteA2");
let A2 = document.querySelector(".A2");

const a22 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const b22 = [
  ["q", "w", "e"],
  ["r", "t", "y"],
  [" h", "h", "g"],
  ["v", "f"],
];
let out22 = "";

for (let i = 0; i < b22.length; i++) {
  for (let k = 0; k < b22[i].length; k++) {
    out22 += b22[i][k];
  }
  out22 += "<br>";
}

let showA2 = () => {
  A2.innerHTML = out22;
  
};
let removeA2 = () => {
  A2.innerHTML = "";
};

pushA2.onclick = showA2;
deleteA2.onclick = removeA2;
