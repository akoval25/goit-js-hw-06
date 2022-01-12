const inputValue = document.querySelector('#font-size-control');
const textValue = document.querySelector('#text');

inputValue.addEventListener('input', onInput);

function onInput(event) {
textValue.style.fontSize = `${event.currentTarget.value}px`;
}