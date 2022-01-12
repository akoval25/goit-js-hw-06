function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const numInput = document.querySelector('[type="number"]');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');
const allBoxes = [];
let amount = 0;
const size = 30;

numInput.addEventListener('input', (event) => {

  amount = event.currentTarget.value;

  createBtn.addEventListener('click', (event) => {

    for (let i = 0; i < amount; i++) {
      let string = `<div style="background-color:${getRandomHexColor()};width:${i * 10 + size}px;height:${i * 10 + size}px;"></div>`;
      allBoxes.push(string);
    }

    const boxEL = allBoxes.join("");

    boxes.insertAdjacentHTML("beforeend", boxEL);
  });

  destroyBtn.addEventListener('click', (event) => {

    while (boxes.firstChild) {
      boxes.removeChild(boxes.firstChild);
    }
  });

});


