// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

const buttonEl = document.querySelector('.change-color');
const spanColorEl = document.querySelector('.color');

buttonEl.addEventListener('click', changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor(event) {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  spanColorEl.textContent = randomColor;
}