const countBits = function (n) {
  return {
    from: function (baseFrom) {
      return {
        to: function (baseTo) {
          let arr = parseInt(n, baseFrom).toString(baseTo).split("");
          return arr.length;
        },
      };
    },
  };
};

console.log(countBits(10).from(10).to(2));
