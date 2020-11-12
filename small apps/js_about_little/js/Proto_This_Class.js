class Animal {
  constructor(options) {
    this.name = options.name;
    this.color = options.color;
  }
  voice() {
    console.log("Base voice from", this.name);
  }
}

const dog = new Animal({ name: "goga", color: "white" });
dog.voice();

class Cat extends Animal {
  constructor(options) {
    super(options);
    this.hasTail = options.hasTail;
  }
  voice() {
    super.voice();
    console.log(this.name, "says meoy");
  }
  get ageInfo() {
    return (this.age = 7);
  }
  set ageInfo(newAge) {
    return (this.age = newAge);
  }
}
const redCat = new Cat({ name: "boby", color: "black", hasTail: false });
redCat.voice();

Object.prototype.print = function () {
  console.log(this);
};
redCat.print();

String.prototype.toTag = function (tagName) {
  return `<${tagName}>${this}</${tagName}>`;
};
console.log("eminem".toTag("b"));
