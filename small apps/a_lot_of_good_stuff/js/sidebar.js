const toggle = document.querySelector(".toggle");
const nav = document.querySelector(".nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

let add = (...args) => {
  function a() {
    return args.reduce((a, b) => {
      return a + b;
    });
  }
  return a();
};
console.log(add(1, 3, 5, 6, 7, 8, 10, 10));

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = () => {
      // функция shooter
      console.log(j); // должна выводить порядковый номер
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();
console.log(army[5]());



