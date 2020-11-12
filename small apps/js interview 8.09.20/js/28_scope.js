/**
 * Variable Scope
 * What will be the output of the three log statements
 * and in what order?
 */
(() => {
  let one /* never assigned*/, two;
  try {
    throw new Error(321);
  } catch (one /* this is another one */) {
    (one = 123), (two = 321);
    //console.log(one);
  }
 // console.log(one);
  //console.log(two);
})();






// let log = console.log;
// log(!!true);
// log(!!"");
// log(!!1);
// log(!!-1);
// log(!!NaN);
// log(!!undefined);
// log(!!"false");
// log(!!null);

// let n = ((x = 1), (y = 2), (z = 3)); /* this is return value (the last) */
// console.log(n);







// let log = console.log;
// log(+"1");
// log(+true);
// log(+false);
// log(+"");
// log(+"hello");
// log(+1);





// let first = (! + [] * []);
// let second = (! + [] + [] * []);
// let third = (! + [] + [] + ![]).length;

// console.log(first);
// console.log(second);
// console.log(third);





console.log(["a", "b"] == ["a", "b"]);
console.log(["a", "b"] == ["a", "b"] + []);
console.log(["a", "b", "c"] == ["a", "b"] + []);
console.log(["a", "b"] == ["b", "a"]);
console.log(["a", "b"] == "a,b");
