/* eslint-disable require-jsdoc */
// ++++++FIBONACHI++++++

// let number = +prompt("Введите число");
// const result = fibonacci(number);
// while (isNaN(number)) {
//   number = prompt("Введите число");
// }
// function fibonacci(value) {
//   let f1 = 0; let f2 =1; let curent = 1;
//   for (let i =1; i<=value; i++) {
//     curent = f1 + f2;
//     f1 = f2;
//     f2 = curent;
//   }
//   return curent;
// };
// console.log(result);

// ++++++FACTORIAL+++++

// let number = +prompt("Введите число которое хотите посчитать");
// while (isNaN(number)) {
//   number = +prompt("Введите число которое хотите посчитать");
// }

// function factorial(value) {
//   let result = 1;
//   for (let i = 1; i <= value; i++) {
//     result = result * i;
//   }
//   return result;
// }
// const facto = factorial(number);
// console.log(facto);

// ++++QuickSort+++++++++

const arr = [1, 5, 8, 7, 9, 555];

const qsort = (arr) => {
  if (arr.length < 2) {
    return arr;
  } else {
    const pivot = arr[Math.floor(Math.random() * arr.length)];
    const less = arr.filter(val => val < pivot);
    const greater = arr.filter(val => val > pivot);
    return [...qsort(less), pivot, ...qsort(greater)];
  }
};

console.log(qsort(arr));
