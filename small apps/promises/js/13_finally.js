let p = new Promise((resolve, reject) => {
  let num = Math.floor(Math.random() * 10);
  if (num >= 5) {
    resolve("good things");
  } else {
    reject("bad things");
  }
});

p.then(console.log)
  .catch(console.log)
  .finally(() => {
    console.log("It will all be ok.");
  });
