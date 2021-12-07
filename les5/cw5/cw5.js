// Всі функції повинні бути описані стрілочним типом!!!!

// //     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let numMin = (a, b, c) => {
//     if (a < b && a < c) {
//         console.log(a);
//     } else if (b < a && b < c) {
//         console.log(b);
//     } else if (c < a && c < b) {
//         console.log(c);
//     }
// }
// numMin(47, 8, 44);

// // - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let numMax = (a, b, c) => {
//     if (a > b && a > c) {
//         console.log(a);
//     } else if (b > a && b > c) {
//         console.log(b);
//     } else if (c > a && c > b) {
//         console.log(c);
//     }
// }
// numMax(1, 66, 12);

// // - створити функцію яка повертає найбільше число з масиву
// let max = (arr) => {
//     let maxNum = arr[0];
//     for (const arr1 of arr) {
//         if (arr1 > maxNum) {
//             maxNum = arr1;
//         }
//     }
//     return maxNum;
// }
// max([2, 4, 5, 50, 6, 54, 5, 46, 33, 56, 74, 5674, 44]);

// - створити функцію яка повертає найменьше число з масиву
// let min = (arr) => {
//     let minNum = arr[0];
//     for (const arr1 of arr) {
//         if (arr1 < minNum) {
//             minNum = arr1;
//         }
//     }
//     return minNum;
// }
// min([2, 4, 5, 50, 6, 54, 44]);

// // - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let sum = (arr) => {
//     let result = 0;
//     for (const arr1 of arr) {
//         result = arr1 + result;
//     }
//     return result;
// }
// sum([1, 3, 2]);

// // - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let sum2 = (arr) => {
//     let result = 0;
//     for (const arr1 of arr) {
//         result = arr1 + result / arr.length;
//     }
//     console.log(result);
//     return result;
// }
// sum2([1, 3, 2]);

// // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let num = (numbs) => {
//     let numbMin = numbs[0];
//     let numbMax = numbs[0];
//
//     for (const numb of numbs) {
//         if (numb < numbMin) {
//             return numbMin = numb;
//         } else if (numb > numbMax) {
//             numbMax = numb;
//         }
//     }
//             console.log(numbMax);
// }
// num([22, 88, 99]);
// - створити функцію яка заповнює масив рандомними числами

// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// // - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let massRandom = (arr, limit) => {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = Math.round(Math.random() * limit);
//     }
//     return arr;
// }
// console.log(massRandom([3, 4, 6, 534, 34, 34, 4, 4], 1000));

// // - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let mass = (arr) => {
//     let newArr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         const newMass1 = arr[i];
//         newArr.push(newMass1);
//     }
//     console.log(newArr);
// }
// mass([23, 546, 3242, 64, 634, 34, 2]);
