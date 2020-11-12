let debounce = document.querySelector(".debounce");

function onChange(e) {
  console.log(e.target.value);
}

const debounceFunc = (fn, ms) => {
  let timeout;
  return function () {
    const fnCall = () => fn.apply(this, arguments);
    clearTimeout(timeout);
    timeout = setTimeout(fnCall, ms);
  };
};

let onChangeDeb = debounceFunc(onChange, 1000);

debounce.addEventListener("keyup", onChangeDeb);
