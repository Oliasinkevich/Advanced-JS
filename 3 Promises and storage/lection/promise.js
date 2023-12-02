// task1

let generateRandomMumber = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() *10) +1;
            if (randomNumber) {
                resolve(randomNumber);
            } else {
                reject("Ошибка генерации случайного числа");
            }
        }, 1000);
    });
}

generateRandomMumber()
.then((number) => {
    console.log(`Сгенерировано случайное число`, number);
}).catch((err) => {
    console.log(`Ошибка:`, err);
});

// task2

// const fetchData = (url) => {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => resolve(data))
//       .catch((error) => reject("Ошибка загрузки данных"));
//   });
// };
// // https://randombig.cat/roar.json
// fetchData("https://randombig.cat/roar.json")
//   .then((data) => {
//     console.log("Получены данные", data);
//   })
//   .catch((err) => {
//     console.log("Ошибка", err);
//   });

// task3

// const checkIfFileExists = (file) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const fileExists = checkIfFileExists(file);
//             if (fileExists) {
//                 resolve("Файл существует")
//             } else {
//                 reject("Файл не существует")
//             }
//         }, 2000);
//     });
// };

// checkIfFileExists('example.txt')
// .then((message) => {
//     console.log(message);
// }).catch((err) => {
//     console.log(`Ошибка:`, err);
// });

// task4

// const divideNumbers = (a, b) => {
//     return new Promise((resolve, reject) => {
//         if (b === 0) {
//             reject('Невозмодно делить на 0')
//         } else {
//             resolve(a / b)
//         }
//     });
// }

// divideNumbers(10, 0)
// .then((result) => {
//     console.log(`Результат деления:`, result);
// }).catch((err) => {
//     console.log(`Ошибка`, err);
// });


