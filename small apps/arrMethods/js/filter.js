const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers2 = [
  6,
  2,
  5,
  66,
  77,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  1,
  1,
  1,
  2,
  2,
  3,
  4,
  5,
  10,
];
const people = [
  { name: "a", age: "18" },
  { name: "b", age: "10" },
  { name: "c", age: "8" },
  { name: "d", age: "22" },
];
const even = (arr) => {
  arr.filter((val) => {
    return val % 2 === 0;
  });
  return arr;
};

const adults = (arr) => {
  let NewArr = arr.filter((val) => {
    if (val.age >= 18) {
      return true;
    }
  });
  return NewArr;
};

const noDubl = (arr) => {
  let newArray = arr.filter((val, i, array) => {
    return (newArr = array.indexOf(val) === i);
  });
  newArray.sort((a, b) => {
    return a - b;
  });
  return newArray;
};
console.log(even(numbers));

console.log(adults(people));

console.log(noDubl(numbers2));
