// Вы создаете интерфейс, где пользователь вводит число. 
// Ваша задача — проверить, является ли введенное значение числом или нет, и дать соответствующий ответ.

// Создайте HTML-структуру: текстовое поле для ввода числа и кнопку "Проверить".
// Добавьте место (например, div) для вывода сообщения пользователю.
// Напишите функцию, которая будет вызвана при нажатии на кнопку. Эта функция должна использовать try и catch для проверки вводимого значения

  
const comment = document.querySelector('.comment');
const btn = document.querySelector('.btn');
const num = document.querySelector('.num');
btn.addEventListener('click', function (e) {
    try {
        const inputElement = num.value;
        if(isNaN(inputElement)){
            throw new Error("Это не число");
        }
        comment.textContent = "Молодец!";
    } catch (error) {
        comment.textContent = error.message;
    }
});