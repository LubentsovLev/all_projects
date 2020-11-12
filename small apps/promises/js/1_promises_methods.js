let p1 = new Promise((resolve, reject) => {
  if (true) {
    resolve("p1 resolved");
  } else {
    reject("p1 rejected");
  }
});
let p2 = Promise.resolve("p2 resolved");
let p3 = () => Promise.resolve(null);
let p4 = () => Promise.reject("p4 is rejected ");

p1.then((res) => {
  console.log("p1", res);
});
p2.then((res) => {
  console.log("p2", res);
});
p3().then((res) => {
  console.log("p3", res);
});
p4()
  .then((res) => {
    console.log("p4", res);
  })
  .catch((res) => {
    console.log("p4 rej", res);
  });
