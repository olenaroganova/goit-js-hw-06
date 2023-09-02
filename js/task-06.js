// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

const inputEl = document.getElementById('validation-input');



inputEl.addEventListener('blur', checkSymbols);

function checkSymbols(event) {
    const inputValue = inputEl.value;
    const dataLength = Number(inputEl.dataset.length);
    inputEl.classList.remove('valid', 'invalid');
    inputValue.length === dataLength ? inputEl.classList.add('valid') :
        inputEl.classList.add("invalid");
}


