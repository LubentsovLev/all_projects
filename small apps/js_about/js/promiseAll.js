let a = new Promise((resolve, reject) => {
  fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      resolve(data.joke);
    });
});
let b = new Promise((resolve, reject) => {
  fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      resolve(data.joke);
    })
    .catch((err) => console.log(err))
    .finally(() => console.log("final"));
});
Promise.all([a, b]).then((v) => {
  console.log(v[0]);
  console.log(v[1]);
});
