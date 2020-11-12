const input = document.querySelectorAll(".input");
const labels = document.querySelectorAll(".labelI");

labels.forEach((l) => {
  l.innerHTML = l.innerHTML.split("").map((letter, i) => {
    return  `
            <span style="transition-delay:${i * 50}ms" >${letter}</span>
            `;
  }).join("")
});
