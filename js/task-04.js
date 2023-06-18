const selectors = {
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  counter: document.querySelector("#value"),
};
selectors.decrementBtn.addEventListener("click", handlerdecrementBtnClick);
selectors.incrementBtn.addEventListener("click", handlerincrementBtnClick);

let counterValue = 0;
function handlerdecrementBtnClick () {
  counterValue -= 1;
  selectors.counter.textContent = counterValue;
};

function handlerincrementBtnClick () {
  counterValue += 1;
  selectors.counter.textContent = counterValue;
};

