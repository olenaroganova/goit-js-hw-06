// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;
let valueElement = document.querySelector("#value");
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

decrementButton.addEventListener("click", () => {
    counterValue -= 1;
    valueElement.textContent = counterValue;
});
incrementButton.addEventListener("click", () => {
    counterValue += 1;
    valueElement.textContent = counterValue;
});