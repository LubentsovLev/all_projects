function hello() {
  console.log(this);
}
const person = {
  name: "gogi",
  age: "23",
  sayHello: hello,
  logInfo: function (sta, mail) {
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Name is ${sta}`);
    console.log(`Age is ${mail}`);
  },
};
const dude = {
  name: "some Dude",
  age: 34,
};
person.logInfo.bind(dude)("the coolest dude", "@");
person.logInfo.apply(dude, ["the coolest dude from apply", "@ from apply"]);

const arr = [1, 2, 3, 45, 44];

// const fun = (arr, n) => {
//     return arr.map((i) => i * n )
// }
Array.prototype.fun = function (n) {
  return this.map((i) => i * n);
};

console.log(arr.fun(5));
