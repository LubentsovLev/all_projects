const search = document.querySelector(".search");

search.oninput = function () {
  let sVal = this.value.trim();
  sVal = sVal.toLowerCase();
  let sItems = document.querySelectorAll(".search__inner div");
  if (sVal != "") {
    sItems.forEach((e) => {
      e.innerText = e.innerText.toLowerCase();
      if (e.innerText.search(sVal) == -1) {
        e.classList.add("none");
        e.innerHTML = e.innerText;
      } else {
        e.classList.remove("none");
        let str = e.innerText;
        e.innerHTML = markI(str, e.innerText.search(sVal), sVal.length);
      }
    });
  } else {
    sItems.forEach((e) => {
      e.classList.remove("none");
      e.innerHTML = e.innerText;
    });
  }
};

const markI = (str, pos, len) => {
  return (
    str.slice(0, pos) +
    "<mark>" +
    str.slice(pos, pos + len) +
    "</mark>" +
    str.slice(pos + len)
  );
};
