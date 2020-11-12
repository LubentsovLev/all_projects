let pushT = document.querySelector(".pushT");
let deleteT = document.querySelector(".deleteT");
let t = document.querySelector(".t");

let t2 = "";

for (let i = 1; i <= 10; i++) {
  for (let k = 1; k <= 10; k++) {
    t2 += `${i}*${k}= ${k * i}<br>`;
  }
  t2 += "<hr>";
}
let readyT = () => {
  t.innerHTML = t2;
};
let deleteTabe = () => {
  t.innerHTML = "";
};

pushT.onclick = readyT;

deleteT.onclick = deleteTabe;
