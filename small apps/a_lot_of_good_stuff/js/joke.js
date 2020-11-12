let pushWE = document.querySelector(".pushWE");
let deleteWE = document.querySelector(".deleteWE");
let WE_1 = document.querySelector(".WE_1");

async function generateJoke() {
  const jokeRes = await fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  });
  const joke = await jokeRes.json();
  WE_1.innerHTML = joke.joke;
}
//generateJoke();

let myJoke = () => {
  fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  })
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      WE_1.innerHTML = data.joke;
    });
};

myJoke();

let showWE = () => {};
let removeWE = () => {};

pushWE.onclick = myJoke;
// deleteWE.onclick = removeWE;
