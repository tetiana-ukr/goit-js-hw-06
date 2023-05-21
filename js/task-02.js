const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
                 /*  1-й варіант*/
                
//const listEl = document.querySelector("#ingredients");
//const markupList = ingredients.map((ingredient) => `<li class="item">${ingredient}</li>`).join("");
//console.log(markupList);
//listEl.innerHTML = markupList;

                  /*   2-й варіант*/
                 
const listEl = document.querySelector("#ingredients");

const markupList = ingredients.map((ingredient) => {

  const item = document.createElement("li");

  item.textContent = ingredient;

  item.classList.add("item");

    return item;
})

listEl.after(...markupList);

//console.log(markupList);


