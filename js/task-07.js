// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
const fontSizeControlEl = document.getElementById('font-size-control');
const textSize = document.getElementById('text');

fontSizeControlEl.addEventListener('input', changeFontSize);

function changeFontSize(event) {
    const fontSize = fontSizeControlEl.value;
    textSize.style.fontSize = `${fontSize}px`;
}
    



