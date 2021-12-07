// // - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function min(a, b, c) {
//     if (a < b && a < c) {
//         console.log(a);
//     } else if (b < a && b < c) {
//         console.log(b);
//     } else if (c < a && c < b) {
//         console.log(c);
//     }
// }
//
// min(29, 3, 4);

// // - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function max(a, b, c) {
//     if (a > b && a > c) {
//         console.log(a);
//     } else if (b > a && b > c) {
//         console.log(b);
//     } else if (c > a && c > b) {
//         console.log(c);
//     }
// }
//
// max(33, 76,100);

// // - створити функцію яка повертає найбільше число з масиву
// function maxArr(arr) {
//     let max = arr[0];
//     for (const arr1 of arr) {
//         if (arr1 > max) {
//             max = arr1;
//         }
//     }
//     return max;
// }
//
// maxArr([3, 5, 23, 33]);

// // - створити функцію яка повертає найменьше число з масиву
// function minArr(arr) {
//     let min = arr[0];
//     for (const arr1 of arr) {
//         if (arr1 < min) {
//             min = arr1;
//         }
//     }
//     return min;
// }
//
// minArr([3, 5, 23, 33]);
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// // - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function sum(numbs) {
//     let result = 0;
//     for (const num of numbs) {
//         result = result + num / numbs.length;
//     }
//     return result;
// }

// // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function maxMinNum(arr) {
//     let min = arr[0];
//     let max = arr[0];
//     for (const arrEl of arr) {
//         if (arrEl < min) {
//             min = arrEl;
//         }
//         if (arrEl > max) {
//             max = arrEl;
//         }
//     }
//     console.log(max);
//     return min;
// }
//
// maxMinNum([1, 44, 43, 2, 89]);

// // - створити функцію яка заповнює масив рандомними числами.
// // цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// function random(arr, size) {
//     for (let i = 0; i < size; i++) {
//         arr[i] = Math.round(Math.random() * 100);
//     }
//     return arr;
// }
//     console.log(random([], 100))

// // - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// function random(arr, size, limit) {
//     for (let i = 0; i < size; i++) {
//         arr[i] = Math.round(Math.random() * limit);
//     }
//     return arr;
// }
//     console.log(random([], 100, 999))

// // - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// function random(arr){
//     let newArr = [];
//     for (let i = arr.length - 1; i >= 0; i--){
//         const arrEl = arr[i];
//         newArr.push(arrEl);
//     }
//     console.log(newArr);
// }
// random([3,4,5,6,5,6,7,8,8]);
