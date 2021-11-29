// // --створити масив з:
// //     - з 5 числових значень
// // - з 5 стічкових значень
// // - з 5 значень стрічкового, числового та булевого типу
// // - та вивести його в консоль
// let masNum = [1, 4, 66, 564, 8];
// let masStr = ['башмак', 'Лена', 'вчитись', 'фіолетовий', 'дощ'];
// let masEls = [66, 564, 'Лена', 'вчитись', true];
// console.log(masStr, masEls, masNum);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let mass = [];
// mass [0] = 55;
// mass [1] = true;
// mass [2] = 'ffff';
// console.log(mass);

// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>
//         JavaScript - це повноцінна динамічна мова програмування , яка застосовується до HTML документа, і може забезпечити динамічну інтерактивність на веб-сайтах. Його розробив Brendan Eich, співзасновник проекту Mozilla, Mozilla Foundation та Mozilla Corporation
//         </div>`)
// }

// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>JavaScript - це повноцінна динамічна мова програмування</div>` + i);
// }

// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 20){
//     document.write(`<div><h1>здрасте</h1></div>`);
//     i++
// }

// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i < 20){
//     document.write(`<h1>здрасте ${i}</h1>`);
//     i++;
// }

// // - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let mass = [1, 4, 66, 564, 8, 11, 41, 616, 5164, 18];
// for (let i = 0; i < mass.length; i++) {
//     const mass1 = mass[i];
//     console.log(mass1);
// }

// // - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let mass = ['башмак', 'Лена', 'вчитись', 'фіолетовий', 'дощ', 'вогонь', 'Овідій', 'журитись', 'мовчати', 'опади'];
// for (const mass1 of mass) {
//     console.log(mass1);
// }

// // - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let mass = [66, 564, 'Лена', 'вчитись', true, -333, 'o', 'p', 'вчитись', 'фіолетовий'];
// // for (const mass1 of mass) {
// //     console.log(mass1);
// // }
// let i = 0;
// while (i < mass.length){
//     let mas = mass[i];
//     console.log(mas);
//     i++;
// }

// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let mass = [66, 564, 'Лена', 'вчитись', true, -333, 'o', false, 'вчитись', 'фіолетовий'];
// // let i = 0;
// // while (i < mass.length){
// //     let mas = mass[i];
// //     if (typeof mas === "boolean"){
// //         console.log(mas);
// //     }
// //     i++;
// // }
// // for (const mass1 of mass) {
// //     if (typeof mass1 === "boolean"){
// //         console.log(mass1);
// //     }
// // }
// for (let i = 0; i < mass.length; i++){
//     let mas = mass[i];
//     if (typeof mas === "boolean"){
//         console.log(mas);
//     }
// }

// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let mass = [66, 564, 'Лена', 'вчитись', true, -333, 'o', false, 'вчитись', 'фіолетовий'];
// // for (let i = 0; i < mass.length; i++) {
// //     let mas = mass[i];
// //     if (typeof mas === "number") {
// //         console.log(mas);
// //     }
// // }
// // for (const mass1 of mass) {
// //     if(typeof mass1 === "number"){
// //         console.log(mass1);
// //     }
// // }
// let i = 0;
// while (i < mass.length){
//     let mas = mass[i];
//     if(typeof mas === "number"){
//         console.log(mas);
//         i++;
//     }
// }

// // - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// // let mass = [66, 564, 'Лена', 'вчитись', true, -333, 'o', false, 'вчитись', 'фіолетовий'];
// // for (i = 0; i < mass.length; i++) {
// //     let mas = mass[i];
// //     if (typeof mas === "string") {
// //         console.log(mas);
// //     }
// // }
// // for (const mass1 of mass) {
// //     if (typeof mass1 === "string") {
// //         console.log(mass1);
// //     }
// // }
// let i = 0;
// while (i < mass.length) {
//     let mas = mass[i];
//     if (typeof mas === "string") {
//         console.log(mas);
//     }
//     i++;
// }

// // - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let mass = [];
// mass [0] = 'sss';
// mass [1] = 'yyy';
// mass [2] = true;
// mass [3] = '99';
// mass [4] = 'ooo';
// mass [5] = 9999;
// mass [6] = 'sjh';
// mass [7] = 'qqq';
// mass [8] = -546;
// mass [9] = false;
// for (const mass1 of mass) {
//     console.log(mass1);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (i =0; i < 10; i++){
//     document.write(`step ${i}`);
//     console.log(i);
// }
// let i = 0;
// while (i < 10){
//     document.write(`${i}`);
//     console.log(i);
//     i++;
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
