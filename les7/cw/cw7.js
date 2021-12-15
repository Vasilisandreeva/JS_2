// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями
// // модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// // додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Cars(model, producer, year, speed, engine) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.speed = speed;
//     this.engine = engine;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//     }
//     this.info = function () {
//         console.log(`модель - ${this.model}, виробник - ${this.producer}, рік випуску - ${this.year}, максимальна швидкість - ${this.speed}, об'єм двигуна - ${this.engine}`):
//     }
//     this.increaseMaxSpeed = function (newSpeed){
//         this.speed = this.speed + newSpeed;
//     }
//     this.changeYear = function (newValue){
//         this.year = newValue;
//     }
//     this.addDriver = function (driver){
//         this.driver = driver;
//     }
// }

// // - (Те саме, тільки через клас)
// // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Cars {
//     constructor(model, producer, year, speed, engine) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.speed = speed;
//         this.engine = engine;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//     }
//
//     info() {
//         console.log(`модель - ${this.model}, виробник - ${this.producer}, рік випуску - ${this.year}, максимальна швидкість - ${this.speed}, об'єм двигуна - ${this.engine}`);
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.speed = this.speed + newSpeed;
//     }
//
//     changeYear(newValue) {
//         this.year = newValue;
//     }
//
//     addDriver(driver) {
//         this.driver = driver;
//     }
// }

// // -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// function Sinderella(name, age, size) {
//     this.name = name;
//     this.age = age;
//     this.size = size;
// }
//
// let arrSind = [
//     new Sinderella('Hlo', 15, 40),
//     new Sinderella('Hle', 17, 39),
//     new Sinderella('Hoe', 18, 36),
//     new Sinderella('Aloe', 19, 37),
//     new Sinderella('Maloe', 16, 36),
//     new Sinderella('Heloe', 17, 36),
//     new Sinderella('Henoe', 17, 35),
//     new Sinderella('Hamoe', 14, 38),
//     new Sinderella('Mehoe', 15, 36),
//
// ]
// console.log(arrSind);
//
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// function Prince(name, age, shoe) {
//     this.name = name;
//     this.age = age;
//     this.shoe = shoe;
// }
//
// let prince = new Prince('Aleks', 18, 35);
// console.log(prince);
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// let match = arrSind.find(value => value.size === prince.shoe);
// console.log(match);

