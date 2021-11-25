// // - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// // (в першу, другу, третю или четверту частину години).


// // // - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = 30;
// switch (day){
//     case '1 <= 10':
//         console.log('Перша декада');
//         break;
//     case '11 <= 20':
//         console.log('Друга декада');
//         break;
//     case '20 <= 31':
//         console.log('Третя декада');
//         break;
//     default:
//         console.log('Вкажіть день');
// }

// // // - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// // //     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
// let test = 'true';
// if (test === 'true'){
//     console.log('вірно');
// } else {
//     console.log('Невірно');
// }
//
// let test = 'true' === true;
// if (true) console.log('вірно');
// else console.log('невірно');

// // // - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let a = 0;
// if (a !== 0){
//     console.log('вірно');
// } else {
//     console.log('невірно');
// }
// let c = 1;
// if (c !== 0){
//     console.log('вірно');
// } else {
//     console.log('невірно');
// }
//
// let b = -3;
// if (b !== 0){
//     console.log('вірно');
// } else {
//     console.log('невірно');
// }

// // // - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
// let key = 'monday';
// switch (key) {
//     case 'sunday':
//         console.log('включай лекцію');
//         break;
//     case 'monday':
//         console.log('роби домашку');
//         break;
//     case 'tuesday':
//         console.log('йди на тренування');
//         break;
//     case 'wednesday':
//         console.log('печи торт');
//         break;
//     case 'thursday':
//         console.log('подзвони мамі');
//         break;
//     case 'friday':
//         console.log('напиши план на тиждень');
//         break;
//     case 'saturday':
//         console.log('роби домашку');
//         break;
// }

// // // - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
// let year = 1999;
// function y (year){
//     let result = year % 4;
//     return result;
// }
// let result = y(year);
// console.log(result);
// if (year === 0){
//     console.log('високосний');
// } else {
//     console.log('невисокосний');
// }

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// // Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
// let question = 'Яка «офіційна» назва JavaScript?';
// if (question === 'ECMAScript'){
//     console.log('Правильно!');
// } else {
//     console.log('Не знаєте? ECMAScript!');
// }
