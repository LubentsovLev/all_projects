const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const includesArr = (arr, val) => {
  if (arr.includes (val)) {
    return "yep";
  } else {
    return "no bro";
  }
};
console.log(includesArr(a , 100));