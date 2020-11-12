const circlesBig = document.querySelectorAll(".circle_big");
const Design__container = document.querySelector(".Design__container");
const Design_show = document.querySelector('.Design_show')
const get_Design = document.querySelector('.get_Design')
const hide_Design = document.querySelector('.hide_Design') 

circlesBig.forEach((circle, idx) => {
  circle.style.borderWidth = (idx + 1) * 10 + "px";
  circle.style.zIndex = -idx;
  circle.style.animationName = `rotate-${idx}`;

  const deg = (idx + 1) * 360;

  const styleCircle = document.createElement("style");
  styleCircle.innerHTML = `
		@keyframes rotate-${idx} {
			to {
				transform: translate(-50%, -50%) rotate(${deg}deg);
			}
		}
	`;
    get_Design.addEventListener("click" , () => {
        Design_show.classList.add("show")
    })
    hide_Design.addEventListener("click" , () => {
        Design_show.classList.remove("show")
    })
  Design__container.appendChild(styleCircle);
  document.body.appendChild(styleCircle);
});
