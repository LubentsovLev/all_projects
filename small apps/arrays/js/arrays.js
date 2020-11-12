const m = ["ff", "ggn", "hh", "hh"];
m[4] = "ffff";

// for (let i = 0; i < m.length; i++) {
//   const el = (document.querySelector(".m").innerHTML += m[i] + "<br/>");
// }
function mOut() {
  var mas = document.querySelector(".m");
  var str = "";
  for (let i = 0; i < m.length; i++) {
    str += i + "---" + m[i] + "<br/>";
  }
  mas.innerHTML = str;
}
mOut();

function push() {
  let input = document.querySelector(".input");
  m.push(input.value);
  input.value = ""

  mOut();
}
function pop () {
  m.pop()
  mOut();
}