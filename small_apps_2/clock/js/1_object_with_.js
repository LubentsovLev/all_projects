const countDeg = (time) => {
  timeM = time.split("");
  let hours = +(timeM[0] + timeM[1]);
  let min = +(timeM[3] + timeM[4]);
  let deg = Math.round(hours + min / 60) * 30 - min * 6;
  return 360 - deg;
};
console.log(countDeg("12:10"));

const SNArr = [1, 2, 1, 2, 3, 3, 5, 5, 23];
const uniq = (arr) => {
  let uniq = new Set(arr);
  uniq.forEach((u) => {
    let g = u;
    console.log(u);
  });
  return uniq;
};
console.log(uniq(SNArr));

function color() {
  // let c = Math.random()
  // console.log(c);
  // c = c.toString(16)
  // console.log(c);

  return "#" + Math.random().toString(16).substring(2, 8);
}

document.querySelector("body").style.backgroundColor = color();

var arrayU = [1, 2, 2, 2,3,41, 3, 3, 4, 5, 4, 4, 41, 11, 1, 1,55];

