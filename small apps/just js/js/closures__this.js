function c(value) {
  let a = 0;
  return function () {
    a = value + 1;
    return a;
  };
}

let a = c(25);

let b = setTimeout(() => {
  console.log(a())
}, 2000);

/// ---this---///

const aarray = [1, 2, 3, 4, 5];
Array.prototype.multBy = function (n)  {
  return this.map( function(i)  {
      return n * i 
  });
};

//console.log(aarray.multBy(20))
