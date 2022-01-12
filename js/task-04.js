let counterValue = document.querySelector('#value');
const decrementValue = document.querySelector('[data-action="decrement"]');
const incrementValue = document.querySelector('[data-action="increment"]');

decrementValue.addEventListener("click", () => {
  counterValue.textContent = +counterValue.textContent - 1;
});

incrementValue.addEventListener("click", () => {
  counterValue.textContent = +counterValue.textContent + 1;
});

