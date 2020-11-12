const person = new Object({
  name: " ggg",
  age: " 40",
  greet: function () {
    console.log("hey");
  },
});

Object.prototype.saySome = () => {
    console.log('hey');
} 
const alex = Object.create(person)
alex.name = 'Alex'

const str = new String('x x xxxx xx ')