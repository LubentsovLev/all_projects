let counterWidgetEl = findValueEl();
let counterWidgetValueEl = findWidgetEl();
bindClickListener(counterWidgetEl, counterWidgetValueEl);
restorePrevValue(counterWidgetValueEl);

function findValueEl() {
  return document.querySelector(".js__counter");
}
function findWidgetEl() {
  return document.querySelector(".js__counter__value");
}

function bindClickListener(counterWidgetEl, counterWidgetValueEl) {
  counterWidgetEl.addEventListener("click", () => {
    let currentValue = counterWidgetValueEl.innerHTML;
    currentValue++;

    localStorage.setItem("currentValue", currentValue);

    counterWidgetValueEl.innerHTML = currentValue;
  });
}
function restorePrevValue(counterWidgetValueEl) { 
  var currentValueLC = localStorage.getItem("currentValue");
  if (!!currentValueLC) {
    counterWidgetValueEl.innerHTML = currentValueLC;
  }
}
