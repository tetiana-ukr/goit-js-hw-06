const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

                
const listEl = document.querySelector("#ingredients");
const markupList = ingredients.map((ingredient) => `<li class="item">${ingredient}</li>`).join("");
console.log(markupList);
listEl.innerHTML = markupList;

