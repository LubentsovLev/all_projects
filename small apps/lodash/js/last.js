let arrKeys = ["имя", "любимый цвет", "любимое блюдо"];
function _last(array) {
  return array != null && array.length ? array.pop() : undefined;
}
console.log(_last(arrKeys));