// За допомогою методу forEach потрібно заповнити масив uploadedFiles
// baseUrl потрібно передати, як this

// const imagesName = ["car", "grass", "avatar", "user", "sea", "water", "bird"];
// const baseUrl = "domain-name.com";
// let uploadedFiles = [];

// // const resultUploadedFiles = [
// //   "domain-name.com/upload/car",
// //   "domain-name.com/upload/grass",
// //   "domain-name.com/upload/avatar",
// //   "domain-name.com/upload/user",
// //   "domain-name.com/upload/sea",
// //   "domain-name.com/upload/water",
// //   "domain-name.com/upload/bird",
// // ];

// imagesName.forEach(function (el) {
//   uploadedFiles.push(`${this}/upload${el}`);
// }, baseUrl);
// console.log(uploadedFiles);

// uploadedFiles = imagesName.map((el) => `${baseUrl}/upload${el}`);
// console.log(uploadedFiles);

//2
/// Напишіть функцію addItemToBasket, яка буде за допомогою методу find перевіряти, чи є вже такий продукт в кошику
// Якщо він є, то потроібно оновити його в коризні
// Якщо немає, то потрібно додати новий продукт до кошику покупок

// Після цього порахувати суму всіх покупок і вивести total;

// let total = 0;

// const product1 = {
//   id: 33,
//   title: "T-shirt",
//   price: 99,
//   count: 1,
// };

// const product2 = {
//   id: 29,
//   title: "Jeans",
//   price: 199,
//   count: 1,
// };

// let basketItems = [
//   {
//     id: 28,
//     title: "iPhone 14",
//     price: 1599,
//     count: 3,
//   },
//   {
//     id: 29,
//     title: "Jeans",
//     price: 199,
//     count: 2,
//   },
// ];

// console.log(basketItems);

// function addItemToBasket(product) {
//   const newProduct = basketItems.find(({ id }) => id === product.id);

//   if (!newProduct) {
//     return [...basketItems, product];
//   } else {
//     return basketItems.map((el) => {
//       const { id } = el;
//       if (id === product.id) {
//         return {
//           ...el,
//           count: (el.count += 1),
//         };
//       } else return el;
//     });
//   }
// }
// basketItems = addItemToBasket(product1);
// basketItems = addItemToBasket(product2);

// console.log(basketItems);

//// 3
//Потрібно отримати URL адресу із адресного рядка бразуера.
// Далі необхідно параметри запиту записати в об'єкт  (query) - ключ, значення (axios)

// const url =
//   "https://www.npmjs.com/?query=axios&version=0.3&module=render&size=32&date=12212183311";

// // console.log(window.location);
// console.log(url);
// const link = new URL(url);
// console.log(link);
// const search = link.search.slice(1);
// console.log(search);
// const arrQuery = search.split("&");
// console.log(arrQuery);
// const objQuery = arrQuery.reduce((obj, item) => {
//   const [key, value] = item.split("=");// деструктуризація масиву
//   //   console.log(values);
//   obj[key] = value;
//   console.log(obj);
//   return obj;
// }, {});
// console.log(objQuery);

///4
// Напишіть метод, який очищає масив від усіх непотрібних елементів, таких як false, undefined, порожні рядки, нуль, null

// const data = [0, 1, false, 2, undefined, "", 3, null];

// const filterData = function (arr) {
//   return arr.filter(Boolean);
// };
// console.log(filterData(data)); // [1, 2, 3]

//5
//// Напишіть функцію, яка рахує кількість входжень значення в масив
// let arr = [2, 4, 3, 1, 2, 1];
// // Очікуваний результат: (arr, 1) => 2

// function checkIncome(arr, number) {
//   return arr.filter((el) => el === number).length;
// }
// console.log("income: 1-", checkIncome(arr, 1));
// console.log("income: 3-", checkIncome(arr, 3));

//6
// Сортувати у порядку за зменшенням

// let arr = [5, 2, 1, -10, 8];

// function sortBy(arr) {
//   return [...arr].sort((a, b) => b - a);
// }
// console.log(sortBy(arr));
// // ... ваш код для сортування за спаданням

// // alert(arr); // 8, 5, 2, 1, -10

//7
//// Напишіть функцію sortByAge(users), яка приймає масив об'єктів із властивістю age та сортує їх за ним.
// Наприклад:
//
// let bruce = { name: "Bruce", age: 25 };
// let jhon = { name: "Jhon", age: 30 };
// let maria = { name: "Maria", age: 28 };

// let arr = [bruce, jhon, maria];

// function sortByAge(arr) {
//   return arr.sort((a, b) => a.age - b.age);
//   //   return arr.sort(({ age: prevAge }, { age: nextAge }) => prevAge - nextAge);
// }

// sortByAge(arr);
// console.log(arr);

// // тепер: [bruce, maria, jhon]
// // alert(arr[0].name); // Bruce
// // alert(arr[1].name); // Maria
// // alert(arr[2].name); // Jhon

//8
// Розробники люблять скорочувати все:
//   k8s означає Kubernetes, a11y означає accessibility, l10n означає localization.
//   Ви отримуєте нумероніми Dev, беручи першу та останню букви та підраховуючи кількість букв між ними.
//   Слова, що містять менше 4 літер, не скорочуються, тому що це було б просто дивно.
//   Змінна input  є реченням, і ви повинні скорочувати кожне слово довжиною 4 літери або більше.
//   У реченні не буде розділових знаків. g2d l2k e6e

// const input = "Every developer likes to mix kubernetes and javascript";
// // Result
// // 'E3y d7r l3s to mix k8s and j8t'

// function shortString(input) {
//   return input
//     .split(" ")
//     .map((word) => {
//       if (word.length > 4) {
//         return `${word[0]}${word.length - 2}${word[word.length - 1]}`;
//       } else {
//         return word;
//       }
//     })
//     .join(" ");
// }
// console.log(shortString(input));
