
//з конспекту
// 1-----------------
// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }
//2------------------

// const clients = ["Mango", "Ajax", "Poly"];
// const lastClientElement = clients.length - 1
// console.log(lastClientElement)
// console.log(clients[lastClientElement])
// console.log(clients[lastClientElement]="kate")
// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

//3------------------
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i <numbers.length; i+=1) {
//     if (numbers[i] < threshold){
//         continue
//     }
//     console.log(numbers[i])
// }

// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

//4-------------------
// //Будемо шукати ім'я клієнта в масиві імен, якщо знайшли - перериваємо цикл, оскільки немає сенсу шукати далі, імена у нас унікальні.
// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//   // На кожній ітерації будемо перевіряти чи збігається елемент масиву з
//   // іменем клієнта. Якщо збігається - записуємо в message повідомлення
//   // про успіх і робимо break, щоб далі не шукати
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }

//   // Якщо вони не збігаються - записуємо в message повідомлення про відсутність імені
//   message = "Клієнт з таким ім'ям відсутній в базі даних!";
// }

// console.log(message); // "Клієнт з таким ім'ям є в базі даних!"


// const languages = ["C", "C++", "Java", "JavaScript"];
// languages.splice(2, 1, "Python")
// console.log(languages)

// languages.splice(2, 0, "C#", "PhP")
// console.log(languages)

// languages.splice(3,1)
// console.log(languages)

// const nameToArr = "Mango";
// const nameArr = nameToArr.split("")
// console.log(nameArr);

// const newName = nameArr.join("");
// console.log(newName)

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.indexOf("Poly"));

// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry"
// const hasFruit = redFruits.includes(fruit)

// console.log(hasFruit)


///заняття
// 1.
//const genres = ['Jazz', 'Bluz']
// genres.push('Rock and Roll')
// console.log (genres)
// const firstEl = genres.splice(0,1)
// console.log (genres)
// console.log (firstEl)
// genres.unshift("Country");
// console.log (genres);
// genres.splice(0, 0, "Country", "Reggae")
// console.log (genres);

//2- масиви та рядки
// const values = "8 11";
// const arr = values.split(" ");
// const value1 = Number(arr[0]);
// const value2 = Number(arr[1]);
// console.log(value1, value2)
// const sum = value1*value2
// console.log(`Площа = ${sum}`)

//3- перебір масиву
// const fruits = ["strawberry", "blueberry", "peach", "banana", "lemon"]
// for(let i = 0; i < fruits.length; i+=1) {
// console.log(`Елемент номер ${i+1}: `, fruits[i])
// }

//додатковий приклад з використавнням 2х параметрів ініціалізації
// for(let i = 0, number = 1; i < fruits.length; i+=1, number+=1) {
//     console.log(`Елемент номер ${number}: `, fruits[i])
//     }

// for(const fruit of fruits) {
//     console.log(fruit)
// }

//4 - Масиви і цикли





//1 завдання автоперевірки---------------------//
// function checkAge(age) {
//     if (age>=18) { // Change this line
//       return "You are an adult";
//     }
  
//     return "You are a minor";
//   }

// console.log(checkAge(20)) // "You are an adult"
// console.log(checkAge(8))//"You are a minor"
// console.log(checkAge(14))// "You are a minor"
// console.log(checkAge(28)) //"You are an adult"


//2 завдання автоперевірки---------------------//
// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     // Change code below this line
//     if (password === ADMIN_PASSWORD){
//         return "Welcome!"
//     }

//     return "Access denied, wrong password!"

//     // let message;
  
//     // if (password === ADMIN_PASSWORD) {
//     //   message = "Welcome!";
//     // } else {
//     //   message = "Access denied, wrong password!";
//     // }
  
//     // return message;
//     // Change code above this line
//   }

// console.log(checkPassword("mangohackzor"))
// console.log(checkPassword("polyhax"))
// console.log(checkPassword("jqueryismyjam"))

//3 завдання автоперевірки---------------------//
// function checkStorage(available, ordered) {
//     // Change code below this line
//     if (ordered === 0){
//         return "Your order is empty!";
//     } 
//     if (ordered > available) {
//         return "Your order is too large, not enough goods in stock!";
//     }

//     return "The order is accepted, our manager will contact you";

//     // let message;
  
//     // if (ordered === 0) {
//     //   message = "Your order is empty!";
//     // } else if (ordered > available) {
//     //   message = "Your order is too large, not enough goods in stock!";
//     // } else {
//     //   message = "The order is accepted, our manager will contact you";
//     // }
  
//     // return message;
//     // Change code above this line
//   }

// console.log(checkStorage(100, 50))// "The order is accepted, our manager will contact you"
// console.log(checkStorage(100, 130))// Your order is too large, not enough goods in stock!"
// console.log(checkStorage(70, 0))// "Your order is empty!"


//4 завдання автоперевірки---------------------//
// const fruits =["apple", "plum", "pear", "orange"]
// console.log(fruits);
// console.table(fruits);


//5 завдання автоперевірки---------------------//
// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);


//6 завдання автоперевірки---------------------//
// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach"
// fruits[3] = "banana"

// console.log(fruits)


//7 завдання автоперевірки---------------------//
// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length;

// console.log(fruitsArrayLength);


//8 завдання автоперевірки---------------------//
// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length-1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElement);


//9 завдання автоперевірки---------------------//
// function getExtremeElements(array) {
//     // Change code below this line
// // const result = [array[0], array[array.length-1]];
// // return result; 

// return [array[0], array[array.length-1]];
  
//     // Change code above this line
//   }
//  console.log(getExtremeElements([1, 2, 3, 4, 5]));
//  console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
//  console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

//10 завдання автоперевірки---------------------//
// function splitMessage(message, delimeter) {
//     let words;
//     // Change code below this line
//   words = message.split(delimeter);
//     // Change code above this line
//     return words;
//   }

//   console.log(splitMessage("Mango hurries to the train", " "));//["Mango", "hurries", "to", "the", "train"]
//   console.log(splitMessage("Mango", ""))//
//   console.log(splitMessage("best_for_week", "_"))

//11 завдання автоперевірки---------------------//
// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line

// // let result
// // result = message.split(" ").length * pricePerWord;
// // console.log(result);
//     return message.split(" ").length * pricePerWord;
 
//  }

//  console.log(calculateEngravingPrice("JavaScript is in my blood", 10));//50
//  console.log(calculateEngravingPrice("JavaScript is in my blood", 20));//100
//  console.log(calculateEngravingPrice("Web-development is creative work", 40));//160

//12 завдання автоперевірки---------------------//
// function makeStringFromArray(array, delimeter) {
//     let string;
//     // Change code below this line
//   string = array.join(delimeter)
  
  
//     // Change code above this line
//     return string;
//   }

//  console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));// "Mango hurries to the train"
//  console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));//"Mango"
//  console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));//"top_picks_for_you"

//13 завдання автоперевірки---------------------//
// function slugify(title) {
//     const slug = title.toLowerCase().split(" ").join("-")
// return slug;

//   }
//  console.log(slugify("Arrays for begginers")); 


//14 завдання автоперевірки---------------------//
//  const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0,2);
// const nonExtremeEls = fruits.slice(1,4); 
// const lastThreeEls = fruits.slice(-3);
// console.log(firstTwoEls);
// console.log(nonExtremeEls)
// console.log(lastThreeEls);

//15 завдання автоперевірки---------------------//
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

// console.log(allClients);


//16 завдання автоперевірки---------------------//
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
// const newArr = firstArray.concat(secondArray);

// if (newArr.length >maxLength) {
//     return newArr.slice(0, maxLength)
// }
// return newArr
//   }

//  console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)) //повертає ["Mango", "Poly", "Ajax"]; 

//  console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));


//17 завдання автоперевірки---------------------//
// const start = 3;
// const end = 7;

// for (let i = start; i <=end ; i += 1) { // Change this line
//   console.log(i);
// }


//18 завдання автоперевірки---------------------//
// function calculateTotal(number) {
//     // Change code below this line
//     let result = 0;
//    for (let i = 1; i <=number; i +=1){
//     result+=i;
//    }
// return result;
   
//      // Change code above this line
//    }
//  console.log(calculateTotal(3));  


//19 завдання автоперевірки---------------------//
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i+=1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }


//20 завдання автоперевірки---------------------//
// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
//     for (let i = 0; i < order.length; i+=1) {
//         total += order[i];
//     }
//     // Change code above this line
//     return total;
//   }

//  console.log(calculateTotalPrice([12, 85, 37, 4])); //138


//21 завдання автоперевірки---------------------//
// function findLongestWord(string) {
    // помилковий код
//   const stringArr = string.split(" ")
//   console.log(stringArr);
//   let MaxWord = stringArr[0];
//   for (i = 0; i <stringArr.length; i+=1){
//     if (stringArr[i].length > stringArr[0].length){
//     MaxWord = stringArr[i]
//     }
//     }
//     return MaxWord

// новий варіант
// const stringToArr = string.split(" ");
// let LongestWord = "";

// for (const word of stringToArr){
//     if(word.length  > LongestWord.length){
//         LongestWord = word;
//     }
// }
  
// return LongestWord 
//   }

//   console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));//jumped


//22 завдання автоперевірки---------------------//
// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     for (let i =min; i <= max; i+=1) {
//         numbers.push(i);
//     }
   
//     return numbers;
//   }
// console.log(createArrayOfNumbers(1, 3));//[1, 2, 3]


// //23 завдання автоперевірки---------------------//
// function filterArray(numbers, value) {
// const newArray = [];

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//         newArray.push(numbers[i]);
//     }
// }
// return newArray;
//  }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); //[4, 5]


// //24 завдання автоперевірки---------------------//
// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];
  
//     return fruits.includes(fruit) ? true : false; // Change this line
//   }

//   console.log(checkFruit("banana")) //true);


// //25 завдання автоперевірки---------------------//
//Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.
// function getCommonElements(array1, array2) {
// const newArray = [];

//1 варіант
// for (let element of array1) {
//     if (array2.includes(element)){
//         newArray.push(element)
//     }
// }
// 2 варіант
// for (let i = 0; i < array1.length; i +=1) {
//     if (array2.includes(array1[i])) {
//         newArray.push(array1[i])
//     }
// }
// return newArray
//   }

// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])) //[1, 2]);


// //26 завдання автоперевірки---------------------//
// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
  
//     // for (let i = 0; i < order.length; i += 1) {
//     //   total += order[i];
//     // }
//     for (let element of order) {
//         total += element;
//     }
  
//     // Change code above this line
//     return total;
//   }

//   console.log(calculateTotalPrice([12, 85, 37, 4]));//138


// //27 завдання автоперевірки---------------------//
// function filterArray(numbers, value) {
//     // Change code below this line
//     const filteredNumbers = [];
  
//     for (let number of numbers) {
  
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     }
  
//     return filteredNumbers;
//     // Change code above this line
//   }
// console.log(filterArray([1, 2, 3, 4, 5], 3));  //[4, 5]


// //28 завдання автоперевірки---------------------//
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 3;

// console.log(a,b,c,d,e);


// //29 завдання автоперевірки---------------------//
// Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел від start до end. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0).
// function getEvenNumbers(start, end) {
// let numberArr = []
//     for (let i = start; i <=end; i+=1){
//         if (i % 2 ===0){
//             numberArr.push(i);
//         }
//     }
//     return numberArr;
//    }

//  console.log(getEvenNumbers(3, 11));  //[4, 6, 8, 10]


// //30 завдання автоперевірки---------------------//
 //Доповни код таким чином, щоб у змінну number записувалося перше число від start до end, яке ділиться на 5 без остачі.
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break
//   }
// }

// console.log(number);


// //31 завдання автоперевірки---------------------//
//Виконай рефакторинг функції findNumber(start, end, divisor) таким чином, щоб вона:
// повертала перше число від start до end, яке ділиться на divisor без остачі
// не використала оператор break
// не використала змінну number
// function findNumber(start, end, divisor) {
//     // Change code below this line
    
  
//     for (let i = start; i < end; i += 1) {
//       if (i % divisor === 0) {
//         return i;
//       }
//     }
  
    
//     // Change code above this line
//   }

//   console.log(findNumber(2, 6, 5));//5
//   console.log(findNumber(8, 17, 3) );//9


// //32 завдання автоперевірки---------------------//
//Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.
//При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення).
// function includes(array, value) {
    
// for (let element of array){
//     if (element===value) {
//     return true;
//     } 
// }
//     return false
// }


// console.log(includes([1, 2, 3, 4, 5], 3));// true
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));//false