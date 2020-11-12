let arrKeys = ["л", "ю", "б", "и", "м"];
const _join = (array, separator) => {
  let nArray = array;
  let b = nArray.join(separator);
  b.toString();

  return b;
};
console.log(_join(arrKeys, "*"));
