// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:

// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:

// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

// Блюда и их повара:

// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

// Заказы:

// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.

const chefs = new Map([
    ["Viktor", "pizza"],
    ["Olga", "sushi"],
    ["Dmitriy", "desserts"]
]);

const dishes = new Map([
    ["pizza 'Margarita'", "Viktor"],
    ["pizza 'Pepperoni'", "Viktor"],
    ["sushi 'Filadelfia'", "Olga"],
    ["sushi 'California'", "Olga"],
    ["dessert 'Tiramisu'", "Dmitriy"],
    ["dessert 'Cheesecake'", "Dmitriy"]
]);

const orders = new Map();

const client1 = {name: "Alexey", table: "25"};
const client2 = {name: "Maria", table: "7"};
const client3 = {name: "Irina", table: "13"};

orders.set(client1, ["pizza 'Pepperoni'", "dessert 'Tiramisu'"]);
orders.set(client2, ["sushi 'California'", "pizza 'Margarita'"]);
orders.set(client3, ["dessert 'Cheesecake'"]);

console.log('Повара и их специализации:', chefs);
console.log('Блюда и их повара:', dishes);
console.log('Заказы:', orders);


function displayChefDishes(chefs, dishes, orders) {
    for (let [client, clientOrders] of orders) {
      console.log(`Заказы для ${client.name}: ${clientOrders}`);
      for (let dish of clientOrders) {
        const chef = dishes.get(dish); // Получаем повара для блюда
        console.log(`${chef} приготовит блюдо ${dish}`);
      }
    }
  }
  
  displayChefDishes(chefs, dishes, orders);