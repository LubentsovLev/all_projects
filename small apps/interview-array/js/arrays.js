const m = [];
restoreArray(m);
var mas = document.querySelector(".m");
function mOut() {
  var mas = document.querySelector(".m");
  var str = "";
  for (let i = 1; i < m.length; i++) {
    str += i + "---" + m[i] + "<br/>";
  }
  mas.innerHTML = str;
}

function push() {
  debugger
  let input = document.querySelector(".input");
  m.push(input.value);
  mOut();
  input.value = "";
  localStorage.setItem("array", JSON.stringify(m));
}
function pop() {
  mOut();
}

function deleteArray(m) {
  const arrayEl = localStorage.getItem("array");
  let arrayElms = JSON.parse(arrayEl);
  if (!!arrayEl) {
    let g = arrayElms;
    m.pop(g);
    arrayElms.pop(g);
    localStorage.setItem("array", JSON.stringify(arrayElms));
    mOut();
  }
}
function restoreArray(m) {
  const arrayEl = localStorage.getItem("array");
  let arrayElms = JSON.parse(arrayEl);
  if (!!arrayEl) {
    arrayElms.forEach((i) => {
      let input = document.querySelector(".input");
      m.push(i);
      input.value = "";

      mOut();
    });
  }
}
