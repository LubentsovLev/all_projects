let myModule = (function () {
  let _data = [];
  let _render = () => {
    //click listeners for _add and _remove
  };
  let _add = () => {
    _data.push("gg");
  };
  let _remove = () => {
    _data.pop();
  };
  return {
    render: _render,
  };
})();
console.log(myModule.render());
// let myModule = {
//     data: [],
//     render: () => {

//     },
//     add: () => {

//     },
//     remove: () => {

//     }
// };
