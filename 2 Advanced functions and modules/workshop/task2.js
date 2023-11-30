// У вас есть базовый список пользователей. Некоторые из них имеют информацию о своем премиум-аккаунте, а некоторые – нет.
// Ваша задача – создать структуру классов для этих пользователей и функцию для получения информации о наличии премиум-аккаунта, используя Опциональную цепочку вызовов методов, оператор нулевого слияния и instanceof.
// Создайте базовый класс User с базовой информацией (например, имя и фамилия).
// Создайте классы PremiumUser и RegularUser, которые  наследуются от User. Класс PremiumUser должен иметь свойство premiumAccount (допустим, дата истечения срока действия), а у RegularUser такого свойства нет.
// Создайте функцию getAccountInfo(user), которая принимает объект класса User и возвращает информацию о наличии и сроке действия премиум-аккаунта, используя Опциональную цепочку вызовов методов и оператор нулевого слияния.
// В функции getAccountInfo используйте instanceof для проверки типа переданного пользователя и дайте соответствующий ответ.

class User {
	#name;
	#family;
	constructor(name, family) {
		this.#name = name;
		this.#family = family;
	}

	get name() {
		return this.#name;
	}

	get family() {
		return this.#family;
	}
}

class RegularUser extends User {
	constructor(name, family) {
		super(name, family);
	}
}

class PremiumUser extends User {
	constructor(name, family) {
		super(name, family);
	}
	premiumAccount = null;
	setPremiunAccount() {
		this.premiumAccount = new Date().setFullYear(new Date().getFullYear() + 1); // Пример: установите срок действия на год вперед
	}
}

// создать RegularUser

function getAccountInfo(user) {
	// Премиум аккаунт действителен до такой-то даты или информация отсутствует
	// пользователь без премиум аккаунта
	// Тип пользователя не определен"
	if (user instanceof PremiumUser) {
		console.log(
			`${new Date(user.premiumAccount).toLocaleDateString()}` ?? 'Информация отсутствует',
			user.name,
			user.family
		);
	} else if (user instanceof RegularUser) {
		console.log('Пользователь без премиум аккаунта', user.name, user.family);
	} else {
		console.log('Тип пользователя не определен');
	}
}

// Проверка
const regular = new RegularUser('Вася', 'Иванов');
const premium = new PremiumUser('Оля', 'Олина');
premium.setPremiunAccount();
const premiumLim = new PremiumUser('Поля', 'Гагарина');

getAccountInfo(regular);
getAccountInfo(premium);
getAccountInfo(premiumLim);