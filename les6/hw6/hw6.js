// // - Знайти та вивести довжину наступних стрінгових значень
// // 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = 'hello world';
// console.log(str.length);
//
// let str2 = 'lorem ipsum';
// console.log(str2.length);
//
// let str3 = 'javascript is cool';
// console.log(str3.length);

// // - Перевести до великого регістру наступні стрінгові значення
// // 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = 'hello world';
// let toUpperCase = str.toUpperCase();
// console.log(toUpperCase);
//
// let str2 = 'lorem ipsum';
// let toUpperCase2 = str2.toUpperCase();
// console.log(toUpperCase2);
//
// let str3 = 'javascript is cool';
// let toUpperCase3 = str3.toUpperCase();
// console.log(toUpperCase3);

// // - Перевести до нижнього регістру настипні стрінгові значення
// // 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str = 'HELLO WORLD';
// let toLowerCase = str.toLowerCase();
// console.log(toLowerCase);
//
// let str2 = 'LOREM IPSUM';
// let toLowerCase2 = str2.toLowerCase();
// console.log(toLowerCase2);
//
// let str3 = 'JAVASCRIPT IS COOL';
// let toLowerCase3 = str3.toLowerCase();
// console.log(toLowerCase3);

// // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str);
// let trim = str.trim();
// console.log(trim);

// // // // // - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// // // // //     let str = 'Каждый охотник желает знать';
// // // // // let arr = stringToarray(str);
// // // // // document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
//
// function stringToarray(str) {
//     return str.split(' ');
// }
//
// document.write(arr);

// // - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// //     let str = 'Каждый охотник желает знать';
// // document.writeln(delete_characters(str, 7)); // Каждый
// let str = 'Каждый охотник желает знать';
//
// function delete_characters(str, length) {
//     return str.substr(0, length);
// }
//
// document.writeln(delete_characters(str, 7));

// // - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// // При цьому всі символи рядка необхідно перевести у верхній регістр.
// //     let str = "HTML JavaScript PHP";
// // document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let str = "HTML JavaScript PHP";
//
// function insert_dash(str) {
//     return str.toUpperCase().replaceAll(' ', '-');
// }
//
// document.write(insert_dash(str));
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// // - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

