const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const laptops = [
  {
    name: "aser",
    price: 1000,
    count: 10,
  },
  {
    name: "hp",
    price: 4000,
    count: 14,
  },
  {
    name: "mac",
    price: 10000,
    count: 5,
  },
];

const double = (arr) => arr.map((i) => i ** 2);
console.log(double(numbers));

const totalValue = (arr) =>
  arr.map((i) => ({
    name: i.name,
    totalValue: i.price * i.count,
  }));
console.log(totalValue(laptops));
