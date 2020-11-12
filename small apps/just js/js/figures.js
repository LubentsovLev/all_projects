let pushF = document.querySelector(".pushF");
let deleteF = document.querySelector(".deleteF");
let F = document.querySelector(".F");

let outF = "";
let q = 3;
let q2 = 7;
for (let i = 0; i < 4; i++) {
  for (let k = 0; k < 11; k++) {
    if (k < q || k > q2) {
      //outF += "-";
      outF += "&nbsp;&nbsp";
    } else {
      outF += "*";
    }
  }
  outF += "<br>";
  q--;
  q2++;
}


let showF = () => {
  F.innerHTML = outF;

};
let removeF = () => {
  F.innerHTML = "";
};

pushF.onclick = showF;
deleteF.onclick = removeF;
