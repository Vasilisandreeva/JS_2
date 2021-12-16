// // Взяти файл template_2.html та працювати в ньому
// // 1) Напишіть код, який :
// // a) додає клас з назвою групи, елементу з ід main_header
// let newClass = document.getElementById('main_header');
// newClass.classList.add('class_name');
//
// // b) робить шириниу елементу ul 400px
// let size = document.getElementsByTagName('ul');
// console.log(size);
// size[0].style.width = '400px';
//
// // c) робить шириниу всіх елементів з класом linkList шириною 50%
// let el = document.getElementsByClassName('linkList');
// for (const elElement of el) {
//     elElement.style.width = '50%';
//     console.log(elElement);
// }
//
// // d) отримує текст який зберігається в елементі з класом listElement2
// let textSave = document.getElementsByClassName('listElement2');
// textSave[0].innerText = '';
//
// // e) отримує всі елементи li та змінює ім колір фону на сірий
// let li = document.getElementsByTagName('li');
// for (const liElement of li) {
//     liElement.style.backgroundColor = 'grey';
// }
//
// // f) отримує всі елементи 'a' та додає їм клас anchor
// let a = document.getElementsByTagName('a');
// for (const aElement of a) {
//     aElement.classList.add('anchor');
//     console.log(aElement);
// }
//
// // g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let aEl = document.getElementsByTagName('a');
// for (const aElElement of aEl) {
//     if (aElElement.innerText === 'link3') {
//         aElElement.style.fontSize = '40px';
//     }
// }
//
// // h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let aEL = document.getElementsByTagName('a');
// for (const aELElement of aEL) {
//     let aText = aELElement.innerText;
//     aELElement.classList.add(`element_${aText}`);
//     console.log(aELElement);
// }
//
// // // i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// // let subEl = document.getElementsByClassName('sub-header');
// // for (const subElElement of subEl) {
// //     subElElement.style.backgroundColor = prompt('choose your color');
// // }
//
// // // j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// // let sE = document.getElementsByClassName('sub-header');
// // for (const sEElement of sE) {
// //     if (sEElement.innerText === 'content 2 segment'){
// //         sEElement.style.color = prompt('choose color');
// //     }
// // }
//
// // // k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// // let elClassName = document.getElementsByClassName('content_1');
// // elClassName[0].innerText = prompt('enter your text');
//
// // l) отримати елементи p та змінити їм padding на 20px
// let p = document.getElementsByTagName('p');
// for (const pElement of p) {
//     pElement.style.padding = '20px';
//     console.log(p);
// }
//
// // m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let text = document.getElementsByClassName('text2');
// text[0].innerText = 'sep-2021';
