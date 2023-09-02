// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

const numberOfCategories = document.querySelectorAll(".item").length;
console.log(`Number of categories: ${numberOfCategories}`);

// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
const items = document.querySelectorAll("#categories .item");
items.forEach((item) => {
    const title = item.querySelector("h2").textContent;
    const elementQuantity = item.querySelectorAll("ul > li").length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${elementQuantity}`);
    
})



