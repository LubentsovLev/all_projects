let arrKeys = ["имя", "любимый цвет", "любимое блюдо"];
function _head(array) {
  return array != null && array.length ? array[0] : undefined;
}
console.log(_head(arrKeys));

//-------------///
function _initial(array)  {
  array.pop()
  return array != null && array.length ? array : undefined;
}
console.log(_initial(arrKeys));