let clean = (elm) => {
  return elm.filter((e) => !isNaN(Number(e)));
};

function sum() {
  return clean(Array.from(arguments)).reduce((a, b) => +a + +b, 0);
}
console.log(sum(2,"3","dfsfsd",45,"44"));
