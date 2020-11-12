/**
 * Create an example of a JavaScript Singleton.
 * After the first object is created, it will return additional
 * references to itself
 */

let obj = (function () {
  let objInstance; //private variable
  function create() {
    let _isRunning = false;
    let start = () => {
      _isRunning = true;
    };
    let stop = () => {
      _isRunning = false;
    };
    let currState = () => {
      return _isRunning;
    };
    return {
      start: start,
      stop: stop,
      currState: currState,
    };
  }
  return {
    getInstance: function () {
      if (!objInstance) {
        objInstance = create();
      }
      return objInstance;
    },
  };
})();

let obj1 = obj.getInstance();
let obj2 = obj.getInstance();
obj1.start();
console.log(obj1.currState());
console.log(obj2.currState());
