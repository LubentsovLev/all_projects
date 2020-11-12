var arrayNth = ["a", "b", "c", "d"];
function _shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}
console.log(_shuffle(arrayNth));


function _delay(text,time) {
  setTimeout(() => {
      console.log(text);
  }, time);
}
_delay('arrayNth',1000);
