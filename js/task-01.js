
const listCategoriesEl = document.querySelector('#categories');

const numChildItemEL = listCategoriesEl.children.length;
console.log(`Number of categories: ${numChildItemEL}`);

const listsHeaderEls = document.querySelectorAll('h2')

listsHeaderEls.forEach((title) => {
  console.log('Category:', title.textContent);
  console.log('Elements:', title.nextElementSibling.children.length);
});
