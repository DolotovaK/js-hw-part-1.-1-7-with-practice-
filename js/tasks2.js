//1
//Потрібно написати функцію, яка приймає 1 параметр key, яка буде перебирати об'єкт
// якщо об'єкт має такий ключ - поверне true

// const obj = {
//   name: "Jhon",
//   car: "Audi",
//   carColor: "White",
// };

// const checkKeyInObj = (currentKey) => {
//   for (const key in obj) {
//     if (key === currentKey) {
//       return true;
//     }
//   }
//   return false;
// };
// console.log(checkKeyInObj("car"));

//найкращий варіаент

// const checkKeyInObj = (key) => key in obj;
// console.log(checkKeyInObj("car"));

//2
// Створіть функцію multiplyNumeric(obj),яка множить всі числові властивості об'єкта obj на 2.

//до  виклику функції
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// const multiplyNumeric = (obj) => {
//   for (const key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] *= 2;
//     }
//   }
// };
// multiplyNumeric(menu);
// console.log(menu);
// //після виклику функції
// // menu = {
// //   width: 400,
// //   height: 600,
// //   title: "My menu",
// // };

//3
////У нас є об'єкт, в якому зберігаються зарплати
//нашої команди
//Напишіть код для обчислення суми всіх зарплат і
//збережіть його результат у змінній sum.
//Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// const calcSalary = (salaries) => {
//   let sum = 0;
//   for (const key in salaries) {
//     sum += salaries[key];
//   }
//   return sum;
// };

// console.log(calcSalary(salaries));

// const calcSalary = (salaries) => {
//   let sum = 0;
//   const values = Object.values(salaries);
//   for (const value of values) {
//     sum += value;
//   }
// };
// console.log(calcSalary(salaries));

//найкращий варіант
// const calcSalary = (salaries) =>
//   Object.values(salaries).reduce((sum, value) => sum + value, 0);
// console.log(calcSalary(salaries));

//4
//// Підрахувати кількість голосних букв у рядку
// Функція `countVowel()` повертає кількість голосних у вхідному рядку.
//
// const vowel = ["a", "e", "o", "u", "i", "y"];
// const countVowel = (str) => {
//   let total = 0;
//   str = str.toLowerCase();
//   for (const letter of str) {
//     if (vowel.includes(letter)) {
//       total += 1;
//     }
//   }
//   return total;
// };

// console.log(countVowel("Hello")); //2
// console.log(countVowel("Umbrella")); //3

//5
//// Напишіть код JS, щоб видалити всі елементи в заданому масиві
// Функція `deleteElement()` видаляє всі входження елемента з заданого масиву.
// let arr = [23, 56, 4, 78, 5, 63, 45, 210, 56];
// arr = deleteElement(arr, 56);

// function deleteElement(arr, number) {
//   // можна зробити ForEach
//   for (let i = 0; i < arr.length; i += 1) {
//     if (number === arr[i]) {
//       arr.splice(i, 1);
//     }
//   }
//   return arr;
// }

// console.log(arr); //[23, 4, 78, 5, 63, 45, 210]

//5
//// Напишіть метод, який розбиває масив на частини визначеного розміру

// const data = [1, 2, 3, 4, 5, 6, 7];

// const chunk = (arr, length) => {
//   let array = [];
//   let idx = 0;
//   while (idx > arr.length) {
//     array.push(arr.slice(idx, length + idx));
//     idx += length;
//   }
//   return array;
// };

// console.log(chunk(data, 2)); // [[1, 2], [3, 4], [5, 6], [7]]
// console.log(chunk(data, 3)); // [[1, 2, 3], [4, 5, 6], [7]]

//ПЕРЕВІРИТИ З
// Напишіть метод, який розбиває масив на частини визначеного розміру

// const data = [1, 2, 3, 4, 5, 6, 7];

// const chunk = (data, length) => {
//   let array = [];
//   let ind = 0;
//   while (ind < data.length) {
//     array.push(data.slice(ind, length + ind));
//     ind += length;
//   }
//   return array;
// };

// console.log(chunk(data, 2)); // [[1, 2], [3, 4], [5, 6], [7]]
// console.log(chunk(data, 3)); // [[1, 2, 3], [4, 5, 6], [7]]

//6
//// Напишіть функцію, щоб перевірити, чи є вхідний рядок паліндромом
// Функція `checkPalindrome()` повертає логічне значення залежно від того, є вхідний рядок паліндромом чи ні.

// const checkPalindrome = (str) => {
//   for (let i = 0; i < str.length; i += 1) {
//     if (str[i] !== str[str.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(checkPalindrome("bannana")); //false
// console.log(checkPalindrome("racecar")); //true
// console.log(checkPalindrome("madam")); //true//

//7
//Напишіть функцію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і рядок з назвою каменю.
//Функція повертає загальну вартість каміння
//з таким ім'ям

// const stones = [
//   { name: "Emerald", price: 1300, quantity: 4 },
//   { name: "Diamond", price: 2700, quantity: 6 },
//   { name: "Sapphire", price: 400, quantity: 7 },
//   { name: "Rubble", price: 150, quantity: 100 },
// ];

// const calcTotalPrice = (stones, stonesName) =>
//   stones.reduce((sum, stone) => {
//     const { name, price, quantity } = stone;
//     if (name === stonesName) {
//       return price * quantity;
//     }
//     return sum;
//   }, 0);

// console.log(calcTotalPrice(stones, "Diamond"));
