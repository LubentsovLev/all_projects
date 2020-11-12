let p1 = () => Promise.resolve("Got the list of users");
let p2 = () => Promise.resolve("Got the list of tweets");
let p3 = Promise.resolve("Got the weather");

Promise.all([p1(), p2(), p3]).then((res) => {
  console.log(res);
});
