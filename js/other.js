//Найдите числа, которые делятся на заданное число​
/*
Завершите функцию, которая принимает два аргумента и возвращает все числа, которые делятся на данный делитель. Первый аргумент - это массив чисел, а второй - делитель.
*/
// divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6];
// function learnJavaScript() {
// const divisibleBy = (numbers, divisor) => {
//   let result = [];
//   for (const number of numbers) {
//     if (number % divisor === 0) {
//       result.push(number);
//     }
//   }
//   return result;
// };
// //   return divisibleBy([1, 2, 3, 4, 5, 6], 2);
// // }
// console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));

//2й варіант
// const divisibleBy = (numbers, divisor) => {
//   return numbers.filter((number) => number % divisor === 0);
// };
// console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));

// const divisibleBy = (numbers, divisor) =>
//   numbers.filter((number) => number % divisor === 0);
// console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));
