const dotsInner = document.querySelector(".dots");
const dotsArr = [];
const rows = 15;
const cols = 15;

for (let i = 0; i < rows; i++) {
  dotsArr[i] = [];
  for (let j = 0; j < cols; j++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dotsInner.appendChild(dot);
    dotsArr[i].push(dot);
  }
}
dotsArr.forEach((cols, i) => {
  cols.forEach((dot, j) => {
    dot.addEventListener("click", () => {
      growDot(i, j);
    });
  });
});

const growDot = (i, j) => {
  if (dotsArr[i] && dotsArr[i][j]) {
    if (!dotsArr[i][j].classList.contains("grow")) {
      dotsArr[i][j].classList.add("grow");
     setTimeout(() => {
        growDot(i - 1, j);
        growDot(i + 1, j);
        growDot(i, j + 1);
        growDot(i, j - 1);
     }, 100);
     setTimeout(() => {
        dotsArr[i][j].classList.remove("grow");
     }, 300);
    }
  }
};
