// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

const buttonCreateEl = document.querySelector('[data-create]');
const buttonDestroyEl = document.querySelector('[data-destroy]');
const inputElement = document.querySelector('input');
const divEl = document.querySelector('#boxes')

let collection = [];

buttonCreateEl.addEventListener('click', makeCollection);
function makeCollection(event) {
  const numberOfElements = Number(inputElement.value);

  let arr = [];
  for (let i = 1; i <= numberOfElements; i += 1) {
    const pEl = document.createElement('p');
    pEl.textContent = `Ваша колекція ${i}`;
    arr.push(pEl.textContent)
  }
  divEl.append([...arr])
}
console.log(divEl);


buttonDestroyEl.addEventListener('click', () => {
  divEl.innerHTML = '';
  inputElement.value = '';
})

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.
// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

const boxesDiv = document.querySelector('#boxes');

function createBoxes(amount) {
    const baseSize = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    const size = baseSize + i * 10;
    const randomColor = getRandomHexColor();

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = randomColor;

    boxesDiv.append(box)
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Виклик функції createBoxes
// createBoxes(8);

function destroyBoxes() {
    boxesDiv.innerHTML = '';
}

// Виклик функції destroyBoxes
// destroyBoxes()