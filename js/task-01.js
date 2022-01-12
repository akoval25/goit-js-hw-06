const allCategories = document.querySelectorAll('.item');
console.log('Number of categories:', allCategories.length);

allCategories.forEach(item => {
  console.log('Category:', item.firstElementChild.textContent);
  let categoryElements = item.querySelectorAll('li');
  console.log('Elements:', categoryElements.length)
});