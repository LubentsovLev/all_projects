const textBlur= document.querySelector(".line-h1");
const textArr = textBlur.innerHTML.split("");
const line_container = document.querySelector('.line-container')

const newEl = document.createElement("h1");
newEl.innerHTML = `
	${textArr
    .map(
      (letter) =>
        `<span class="letter" style="${randomVisibility()}">${letter}</span>`
    )
    .join("")}
`;
newEl.classList.add("overlay");

line_container.appendChild(newEl);

function randomVisibility() {
  return Math.random() < 0.5 ? "visibility: hidden" : "visibility: visible";
}
