// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // // створити пустий масив, наповнити його 10 об'єктами new User(....)
// let users = [];
//
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let user = new User(1, 'Nastua', 'Ivanova', 'uyvabufb', 3456789);
// let user1 = new User(2, 'Nastua', 'Ivanova', 'uyvabufb', 3456789);
// let user2 = new User(3, 'Nastua', 'Ivanova', 'uyvabufb', 3456789);
// let user3 = new User(4, 'Nastua', 'Ivanova', 'uyvabufb', 3456789);
// let user4 = new User(5, 'Nastua', 'Ivanova', 'uyvabufb', 3456789);
// let user5 = new User(6, 'Nastua', 'Ivanova', 'uyvabufb', 3456789);
// let user6 = new User(7, 'Nastua', 'Ivanova', 'uyvabufb', 3456789);
// let user7 = new User(8, 'Nastua', 'Ivanova', 'uyvabufb', 3456789);
// let user8 = new User(9, 'Nastua', 'Ivanova', 'uyvabufb', 3456789);
// let user9 = new User(10, 'Nastua', 'Ivanova', 'uyvabufb', 3456789);
// users.push(user, user1, user2, user3, user4, user5, user6, user7, user8, user9);
// console.log(users);
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filter = users.filter(value => value.id % 2 === 0);
// console.log(filter);
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sort = users.sort((a, b) => a.id - b.id);
// console.log(sort);

// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// // створити пустий масив, наповнити його 10 об'єктами Client
// let arr = [
//     new Client(1, 'Valera', "Jolob", 'hfsdiufgs', 8888888888, ['srtbtg']),
//     new Client(2, 'Valea', "Jolob", 'hfsdiufgs', 88888888488, ['srtbtg', 'egseger']),
//     new Client(3, 'Valra', "Jolob", 'hfsdiufgs', 88888887888, ['srtbtg', 'egseger', 'srtbtg', 'egseger']),
//     new Client(4, 'Vlera', "Jolob", 'hfsdiufgs', 88888868888, ['srtbtg', 'egseger', 'egseger']),
//     new Client(5, 'Valer', "Jolob", 'hfsdiufgs', 88888888488, ['srtbtg', 'egseger']),
//     new Client(6, 'Valea', "Jolob", 'hfsiufgs', 88888888886, ['srtbtg', 'egseger', 'egseger']),
//     new Client(7, 'Vara', "Jolob", 'hfsiufgs', 88888888888, ['srtbtg']),
//     new Client(8, 'Valera', "Jolob", 'fsdiufgs', 88888888888, ['srtbtg', 'egseger']),
//     new Client(9, 'Valera', "Jolob", 'hfsiufgs', 888888788888, ['srtbtg', 'egseger', 'egseger', 'egseger', 'egseger']),
//     new Client(10, 'Valera', "Jolob", 'hfsfgs', 8888888878988, ['srtbtg'])
// ]
// console.log(arr);
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sort = arr.sort((a, b) => a.order.length - b.order.length);
// console.log(sort);
