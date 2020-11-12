let C_1 = document.querySelectorAll(".C_1");
let C_2 = document.querySelector(".C_2");

C_1.forEach((c) => {
  c.innerText = "0";
  const updateCounter = () => {
    const target = +c.getAttribute("data-target");
    const cInn = +c.innerText;
    if (cInn < target) {
      c.innerText = Math.ceil(cInn + Math.random()* 100);
      setTimeout(updateCounter , 1);
    } else {
        c.innerText = target
    }
  };
  updateCounter();
});
