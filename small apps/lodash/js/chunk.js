let arrKeys = ["имя", "любимый цвет", "любимое блюдо"];
let arrArrs_cunck = [
  ["0 Василий"],
  ["1 Василий"],
  ["2 Мария"],
  ["3 Иннокентий"],
  ["4 Василий"],
  ["5 Мария"],
  ["6 Иннокентий"],
  ["7 Василий"],
  ["8 Мария"],
  ["9 Иннокентий"],
  ["10 Василий"],
  ["11 Мария"],
  ["12 Иннокентий"],
  ["13 Василий"],
  ["14 Мария"],
];

function _slice(array, start, end) {
  /// проверки ///
  let length = array == null ? 0 : array.length;
  //let length = array.length
  /// проверки ///
  if (!length) {
    return [];
  }
  start = start == null ? 0 : start;
  end = end === undefined ? length : end;
  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  if (end < 0) {
    end += length;
  }
  end = end > length ? length : end;
  start >>>= 0;

  /// проверки ///

  length = end - start;
  let index = -1;
  const result = new Array(length);

  while (++index < length) {
    result[index] = array[index + start];
    // let a = array[index + start];
    // let b = array[index];
    // let c = result[index] = array[index + start]

    //result 1 = array[index + start];
  }
  return result;
}
//new Array(Math.ceil(array.length / size)) === [Math.ceil(array.length / size)]
///---------///

let _chunk = (array, size = 1) => {
  if (!array.length || size < 1) {
    return [];
  }
  let index = 0;
  let resIndex = 0;
  const result = [Math.ceil(array.length / size)]; // 5
  while (index < array.length) {
    result[resIndex++] = _slice(array, index, (index += size)); // start = 0 - 12 end = 3 - 15
  }

  return result;
};

console.log(_chunk(arrArrs_cunck, 5));
