const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector('#ingredients');

const allItems = [];

ingredients.forEach(ingredient => {
  const itemEL = document.createElement('li');
  itemEL.textContent = ingredient;
  itemEL.classList.add('item');
  allItems.push(itemEL)
});

listRef.append(...allItems);
