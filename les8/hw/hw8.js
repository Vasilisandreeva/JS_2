// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
let elementById = document.getElementById('content');
console.log(elementById);

// -- отримує текст з блоку з id "rules"
let elementById2 = document.getElementById('rules');
console.log(elementById2);

// -- замініть текст параграфа з id 'content' на будь-який інший
elementById.innerText = 'New text';

// -- замініть текст параграфа з id 'rules' на будь-який інший
elementById2.innerText = 'New text 2';

// -- змініть кожному елементу колір фону на червоний
let bacgroundColor = document.body.children;
for (const bacgroundColorElement of bacgroundColor) {
    bacgroundColorElement.style.backgroundColor = 'red';
}

// -- змініть кожному елементу колір тексту на синій
let blueBacgroundColor = document.body.children;
for (const blueBacgroundColorElement of blueBacgroundColor) {
    blueBacgroundColorElement.style.backgroundColor = 'blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let elementById3 = document.getElementById('rules');
console.log(elementById3.classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let fcRules = document.getElementsByClassName('fc_rules');
for (const fcRule of fcRules) {
    fcRule.style.backgroundColor = 'red';
}
