// // - Дано список імен.
// //     let n1 = 'Harry..Potter'
// // let n2 = 'Ron---Whisley'
// // let n3 = 'Hermione__Granger'
// // Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// // let n1 = 'Harry Potter'
// // let n2 = 'Ron Whisley'
// // let n3 = 'Hermione Granger'
// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';
//
// function validName(name) {
//    return name
//         .replace('..', ' ')
//         .replace('---', ' ')
//         .replace('__', ' ');
// }
//
// document.write(validName(n1));
// document.write(validName(n2));
// document.write(validName(n3));

// // - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// function random(size) {
//     let arr = [];
//     for (let i = 0; i < size; i++) {
//         arr.push(Math.round(Math.random() * 100));
//     }
//     return arr;
// }
//
// console.log(random(10));

// // // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// function random(size) {
//     let arr = [];
//     for (let i = 0; i < size; i++) {
//         arr.push(Math.round(Math.random() * 100));
//         arr.sort((a,b) => a - b);
//     }
//     return arr;
// }
//
// console.log(random(30));

// // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// function filter(size) {
//     let arr = [];
//     for (let i = 0; i < size; i++) {
//         arr.push(Math.round(Math.random() * 100));
//         arr.filter(value => value % 2 === 0);
//     }
//     return arr;
// }
//
// console.log(filter(30));

// // - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// // за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// function map(size) {
//     let arr = [];
//     for (i = 0; i < size; i++) {
//         arr.push(Math.round(Math.random() * 100));
//         arr.map(value => value + '');
//     }
//     return arr;
// }
//
// console.log(map(30));

// // - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// // або навпаки в залежності від значення аргументу direction.
// //     let nums = [11,21,3];
// // sortNums('ascending') // [3,11,21]
// // sortNums('descending') // [21,11,3]
// function sortNums(numbers, direction){
//     let sortArr = [];
//     if(direction === 'ascending') {
//         sortArr = numbers.sort((a, b) => a - b);
//     } else if(direction === 'descending'){
//         sortArr = numbers.sort((a, b) => b - a);
//     }
//     return sortArr;
// }
// sortNums([11,21,3], 'descending');

// // - є масив
// // let coursesAndDurationArray = [
// //     {title: 'JavaScript Complex', monthDuration: 5},
// //     {title: 'Java Complex', monthDuration: 6},
// //     {title: 'Python Complex', monthDuration: 6},
// //     {title: 'QA Complex', monthDuration: 4},
// //     {title: 'FullStack', monthDuration: 7},
// //     {title: 'Frontend', monthDuration: 4}
// // ];
// // -- відсортувати його за спаданням за monthDuration
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// console.log(coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration));;
// console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));
