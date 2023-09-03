const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredientsList = document.querySelector("#ingredients");
let arr = [];
ingredients.forEach(function (ingredient) {
  const li = document.createElement("li",);
  li.textContent = ingredient;
  li.classList.add("item");
  arr.push(li)
})
ingredientsList.append(...arr)








 

