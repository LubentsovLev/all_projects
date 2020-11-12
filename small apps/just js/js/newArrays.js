let A1_1 = document.querySelector(".A1-1");
let A1_2 = document.querySelector(".A1-2");
let A1_3 = document.querySelector(".A1-3");
let A1_inn = document.querySelector(".A1-inn");
let pushA1 = document.querySelector(".pushA1");
let deleteA1 = document.querySelector(".deleteA1");

var total = [0, 1, 2, 3, 99, 100, 1000, 1, 2, 444, 1000050, 1];
let first1 = total.reduce(function (a, b) {
  return a + b;
});
let max = total.reduce((acc, curr) => {
  return acc > curr ? acc : curr; // Перепресваивание самого большого числа
});

let i = 0;
let timer = setInterval(function () {
  i++;
  A1_3.innerHTML = "it's timer:" + "<br>" + i;
}, 1000);

A1_1.innerHTML = "totalValue:" + "<br>" + first1;
A1_2.innerHTML = "theBiggestValue:" + "<br>" + max;

pushA1.onclick = () => {
  A1_inn.classList.add("A1-show");
};
deleteA1.onclick = () => {
  A1_inn.classList.remove("A1-show");
};
