// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

const albums = [
    {
        title: "Thriller",
        artist: "Michael Jackson",
        year: "1982"
        },
    {
        title: "Back in Black",
        artist: "AC/DC",
        year: "1980"
    },
    {
        title: "Nevermind",
        artist: "Nirvana",
        year: "1991"
    },      
];

const musicCollection = {
    albums: [...albums],
    [Symbol.iterator]: function () {
        let index = 0;
        return {
            next: () => {
                if (index < this.albums.length) {
                    return { value: this.albums[index++], done: false };
                } else {
                    return { done: true };
                }
            },
        };
    },
};

for (let albums of musicCollection) {
    console.log(`${albums.title} - ${albums.artist} (${albums.year})`);
}