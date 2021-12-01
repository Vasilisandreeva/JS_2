// // // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function sq(a, b) {
//     let res = a * b;
//     return res;
// }
// sq(10, 20);
// console.log(sq(10, 20));

// // - створити функцію яка обчислює та повертає площу кола з радіусом r
// function s(r) {
//     let res = Math.PI * (r**2);
//     return res;
// }
// s(20);
// console.log(s(20));

// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function s(h, r) {
//     let res = 2 * Math.PI * r * h;
//     return res;
// }
// s(4,7);
// console.log(s(4,7));

// // - створити функцію яка приймає масив та виводить кожен його елемент
// function takeMass(mass) {
//     for (const mas of mass) {
//         console.log(mas)
//     }
// }

// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function createParagraph (text){
//     document.write(`<p>${text}</p>`);
// }
// createParagraph('ahfbapibvpav');

// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function createLi(text) {
//     document.write(`<ul>
//     <li>${text}</li>
//     <li>${text}</li>
//     <li>${text}</li>
//     </ul>`);
// }
//
// createLi('okten');

// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function createLi(text, num) {
//     document.write(`<ul>`);
//     for (let i = 0; i < num; i++){
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
// createLi('okten',3);

// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function createList(elements) {
//     document.write(`<ul>`);
//     for (const element of elements) {
//         document.write(`<li>${element}</li>`);
//     }
//     document.write(`</ul>`);
// }
//
// createList([5, 5, 5, 'fdgsgs']);

// // - створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ. Для кожного об'єкту окремий блок.
// function users(arr){
//     for (const user of arr) {
//         document.write(`<div>${user.id} - ${user.name} - ${user.age}</div>`);
//     }
// }
// users();
