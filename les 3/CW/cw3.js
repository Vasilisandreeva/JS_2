// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:


// // 1. перебрати його циклом while
// let mass = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// while (i < mass.length){
//     let mas = mass[i];
//     console.log(mas)
//     i++;
// }

// // 2. перебрати його циклом for
// let mass = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (i = 0; i < mass.length; i++) {
//     let mas = mass[i];
//     console.log(mas);
// }

// // 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let mass = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// while (i < mass.length) {
//     let mas = mass[i];
//     if (mas % 3 === 0 && mas !== 0){
//         console.log(mas);
//     }
//         i++;
// }

// // 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let mass = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < mass.length; i++) {
//     let mas = mass[i];
//     if (mas % 3 === 0) {
//         console.log(mas);
//     }
// }

// // 5. перебрати циклом while та вивести  числа тільки парні  значення
// let mass = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// while (i < mass.length) {
//     let mas = mass[i];
//     if (mas % 2 === 0 && mas !== 0) {
//         console.log(mas);
//     }
//     i++;
// }

// // 6. перебрати циклом for та вивести  числа тільки парні  значення
// let mass = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < mass.length; i++) {
//     let mas = mass[i];
//     if (mas % 2 === 0 && mas !== 0) {
//         console.log(mas);
//     }
// }

// // 7. замінити кожне число кратне 3 на слово "okten"
// let mass = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < mass.length; i++){
//     let mas = mass[i];
//     if(mas % 3 === 0 && mas !== 0){
//         let mas = "okten";
//         console.log(mas);
//     }
//     console.log(mas);
// }

// // 8. вивести масив в зворотньому порядку.
// let mass = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = mass.length - 1; i >= 0; i--){
//     const mas = mass[i];
//     console.log(mas);
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

// // 1. перебрати його циклом while
// let mass = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = mass.length - 1;
// while (i >= 0){
//     let mas = mass[i];
//     console.log(mas);
//     i--;
// }

// // 2. перебрати його циклом for
// let mass = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = mass.length - 1; i >= 0; i--) {
//     let mas = mass[i];
//     console.log(mas);
// }

// // 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let mass = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = mass.length - 1;
// while (i >= 0) {
//     let mas = mass[i];
//     if (mas % 3 === 0 && mas !== 0) {
//         console.log(mas);
//     }
//     i--;
// }

// // // 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let mass = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = mass.length - 1; i >= 0; i--) {
//     let mas = mass[i];
//     if (mas % 3 === 0 && mas !== 0) {
//         console.log(mas);
//     }
// }

// // 5. перебрати циклом while та вивести  числа тільки парні  значення
// let mass = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = mass.length -1;
// while (i >= 0){
//     let mas = mass[i];
//     if(mas %2 === 0){
//         console.log(mas);
//     }
//     i--;
// }

// // 6. перебрати циклом for та вивести  числа тільки парні  значення
// let mass = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = mass.length - 1; i > +0; i--) {
//     let mas = mass[i];
//     if (mas % 2 === 0) {
//         console.log(mas);
//     }
// }

// // 7. замінити кожне число кратне 3 на слово "okten"
// let mass = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for(let i = mass.length - 1; i >=0; i--){
//     let mas = mass[i];
//     if (mas % 3 === 0 && mas !== 0){
//         let mas = "okten";
//         console.log(mas);
//     }
//     console.log(mas);
// }
