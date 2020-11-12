const h1 = document.querySelector(".autoWritter_h1");
const textWRitter = "Do you want to leave your country?";
let idx = 1;
setInterval(writeText, 100);
function writeText() {
  h1.innerText = textWRitter.slice(0, idx);
  idx++;
  setTimeout(() => {
    if (idx > textWRitter.length) {
      idx = 1;
    }
  }, 5000);
}
