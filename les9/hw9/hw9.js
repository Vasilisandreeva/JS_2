// // се робити за допомоги js.
// // - створити блок,
// //     - додати йому класи wrap, collapse, alpha, beta
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// // - додати цей блок в body.
// // - клонувати його повністю, та додати клон в body.
// let divEl = document.createElement('div');
// divEl.classList.add('wrap', 'collapse', 'alpha', 'beta');
// divEl.style.backgroundColor = 'silver';
// divEl.style.color = 'blue';
// divEl.style.fontSize = '40px';
// divEl.style.marginBottom = '5px';
// divEl.innerText = 'Hello world'
// document.body.append(divEl);
// document.body.append(divEl.cloneNode(true));

// // - Є масив:
// //     ['Main','Products','About us','Contacts']
// // Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// // Завдання робити через цикли.
// let arr = ['Main', 'Products', 'About us', 'Contacts'];
// let menu = document.getElementsByClassName('menu')[0];
// for (const menuEl of arr) {
//     let li = document.createElement('li');
//     li.innerText = menuEl;
//     menu.appendChild(li);
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
// for (const divElement of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     let h1 = document.createElement('h1');
//     h1.innerText = `${divElement.title} - ${divElement.monthDuration}`;
//     div.appendChild(h1);
//     document.body.append(div);
// }

// // - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// // з title  елементу, та <p class='description'> з monthDuration елементу.
// //     Завдання робити через цикли.
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.classList.add('item');
//     let h1 = document.createElement('h1');
//     h1.classList.add('heading');
//     h1.innerText = `${coursesAndDurationArrayElement.title}`
//     let p = document.createElement('p');
//     p.classList.add('description');
//     p.innerText = `${coursesAndDurationArrayElement.monthDuration}`;
//     div.appendChild(p);
//     div.appendChild(h1);
//     document.body.append(div);
// }
