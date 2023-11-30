// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.
// Реализуйте геттер allBooks, который возвращает текущий список книг.
// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.
// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.
// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.
// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента.

class Library {
	#books = [];
	constructor(books) {
		this.#books = books;
	}

	get allBooks() {
		return this.#books;
	}

	addBook(title) {
		if (this.#books.includes(title)) {
			throw new Error('Книга с таким названием уже существует в списке');
		}
		this.#books.push(title);
		return this.#books;
	}

	removeBook(title) {
		if (!this.#books.includes(title)) {
			throw new Error('Книги с таким названием нет в списке');
		}
		this.#books = this.#books.filter(book => book !== title);
		return this.#books;
	}

    hasBook(title) {
		return this.#books.includes(title);
	}
}

let reader = new Library(['Мастер и Маргарита', 'Война и мир'])
console.log(reader.allBooks);

reader.addBook('Герой нашего времени');
// reader.addBook('Мастер и Маргарита');
console.log(reader.allBooks);

reader.removeBook('Война и мир');
// reader.removeBook('Шантарам');
console.log(reader.allBooks);

console.log(reader.hasBook('Герой нашего времени')); 
console.log(reader.hasBook('Шантарам')); 