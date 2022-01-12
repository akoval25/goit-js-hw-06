function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');
const bodyRef = document.querySelector('body');

changeColorBtn.addEventListener('click', onChangeColorBtn);

function onChangeColorBtn(event) {
  colorValue.textContent = getRandomHexColor();
  bodyRef.style.backgroundColor = getRandomHexColor();
 }