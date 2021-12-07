// Всі функції повинні бути описані стрілочним типом!!!!

// // - створити функцію яка обчислює та повертає площу прямокутника висотою
// let sq = (a, h) => a * h;
// console.log(sq(10, 20));

// // - створити функцію яка обчислює та повертає площу кола
// let sRound = r => Math.PI * r ** 2;
// console.log(sRound(19));

// // - створити функцію яка обчислює та повертає площу циліндру
// let s = (r, h) => 2 * Math.PI * r * h;
// console.log(s(2, 19));

// // - створити функцію яка приймає масив та виводить кожен його елемент
// let mass = (arr) => {
//     for (const arrElement of arr) {
//         console.log(arrElement)
//     }
// }
// mass([4,46,6,7,8,8,8]);

// // - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// let paragr = (text) => {
//     document.write(`<p>${text}</p>`);
// }
// paragr('hi');

// // - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let list = (text) => {
//     document.write(`<ul>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
// }
// list('how are u?');

// // - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let list = (text, num) => {
//     document.write(`<ul>`);
//     for (let i= 0; i < num; i ++){
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`);
// }
// list('ololo', 3);

// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let mass = (arr) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`);
//     }
//     document.write(`</ul)`);
// }
// mass([2, 3, 4, 6, 7, 77]);

// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let users = (arr) => {
//     for (const user of arr) {
//         document.write(`<div>${user.id} - ${user.name} - ${user.age}</div>`);
//     }
// }
// users([]);
