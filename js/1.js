// const age = 10;
// const totalPrice = 200.74;
// const userName = 'Chelsy';
// const message = 'Welcome';
// const isOpen = true;
// const shouldConfirm = false;

// console.log(totalPrice);
// console.log(age);

//----1 завдання автоперерірки---//

// const productName = "Droid";
// const pricePerItem = 2000;

// console.log(productName);
// console.log(pricePerItem);

//----2 завдання автоперерірки---//
// let productName = "Droid";
// let pricePerItem = 2000;

// pricePerItem = pricePerItem +1500;
// productName = "Repair droid";
// console.log(productName);
// console.log(pricePerItem);

//----3 завдання автоперерірки---//
// const topSpeed = 160;
// const distance = 617.54;
// const login = 'mango935';
// const isOnline = true;
// const isAdmin = false;

//----4 завдання автоперерірки---//
// const pricePerItem = 3500;
// const orderedQuantity = 4;
// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice)

//----5 завдання автоперерірки---//
// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);

//----6 завдання автоперерірки---//
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
// console.log(message);

//----7 завдання автоперерірки---//
// function sayHi () {
//     console.log("Hello, this is my first function!")
// }
// sayHi()

//----8 завдання автоперерірки---//
// function add (a, b, c) {
//     console.log(`Addition result equals ${a+ b+c}`)
// }
// add(15, 27, 10)
// add(10, 20, 30)
// add(5, 10, 15)

//----9 завдання автоперерірки---//
// function add (a, b, c) {
//     return (a+b+c)
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

//----10 завдання автоперерірки---//
// function makeMessage (name, price) {
//      const message = `You picked ${name}, price per item is ${price} credits`;
//     return message;
//   };

//----11 завдання автоперерірки---//
//   function calculateTotalPrice (orderedQuantity, pricePerItem) {
//     const totalPrice = orderedQuantity * pricePerItem;
//     return totalPrice;
//   };

//----12 завдання автоперерірки---//
//   function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//     const totalPrice = orderedQuantity * pricePerDroid + deliveryFee
//     const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

//     return message;
//   }

//----13 завдання автоперерірки---//
//   function isAdult(age) {
//     // Change code below this line
//     const passed = isAdult >=18;

//     // Change code above this line
//     return passed;
//   }

//----14 завдання автоперерірки---//
// function isValidPassword(password) {
//     const SAVED_PASSWORD = 'jqueryismyjam';
//     const isMatch = password===SAVED_PASSWORD;
//     return isMatch;
//   }

//----15 завдання автоперерірки---//
// function checkAge(age) {
//     let message;

//     if (age>=18) { // Change this line
//       message = 'You are an adult';
//     } else {
//       message = 'You are a minor';
//     }

//     return message;
//   }

//   checkAge(20)
//   checkAge(8)
//   checkAge(14)
//   checkAge(38)

// //----16 завдання автоперерірки---//
// function checkStorage(available, ordered) {
//     let message;
//  if (available < ordered){
//     message = "Not enough goods in stock!"
//  } else {
//     message = "Order is processed, our manager will contact you."
//  }
//     return message;
//   }

// //----17 завдання автоперерірки---//
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a +=  2;
// b -=  4;
// c *=  3;
// d /=  10;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// //----18 завдання автоперерірки---//
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     const totalPrice = (pricePerDroid * orderedQuantity);
//     if (totalPrice > customerCredits) {
//         message = "Insufficient funds!";
//     } else {
//         message = `"You ordered ${orderedQuantity}, you have ${customerCredits - totalPrice} credits left"`
//     }

//     return message;
//   }

// //----19 завдання автоперерірки---//
// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';
//     let message;

//     if (password === null) { // Change this line
//       message =  'Canceled by user!';
//     } else if (password === ADMIN_PASSWORD) { // Change this line
//       message = 'Welcome!';
//     } else {
//       message = 'Access denied, wrong password!';
//     }

//     return message;

//   }
//   console.log(checkPassword("mangohackzor"))
//   console.log(checkPassword(null))
//   console.log(checkPassword("polyhax"))
//   console.log(checkPassword("jqueryismyjam"))

// //----20 завдання автоперерірки---//
// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line
//   if (ordered===0) {
//     message = "There are no products in the order!"
//   } else if (ordered>available){
//     message = "Your order is too large, there are not enough items in stock!"
//   } else {
//     message = "The order is accepted, our manager will contact you"
//   }
//     // Change code above this line
//     return message;
//   }

//   console.log(checkStorage(100, 50)); //"The order is accepted, our manager will contact you"
//   console.log(checkStorage(100, 130)); //"Your order is too large, there are not enough items in stock!"
//   console.log(checkStorage(70, 0)); // "There are no products in the order!"
//   console.log(checkStorage(200, 20)); //"The order is accepted, our manager will contact you"
//   console.log(checkStorage(200, 250)); // "Your order is too large, there are not enough items in stock!"
//   console.log(checkStorage(150, 0)); // "There are no products in the order!"

// //----21 завдання автоперерірки---//
// function isNumberInRange(start, end, number) {
//     const isInRange = (number>=start && number<=end); // Change this line

//     return isInRange;
//   }

//   console.log(isNumberInRange(10, 30, 17)) //true
//   console.log(isNumberInRange(10, 30, 5)) //false
//   console.log(isNumberInRange(20, 50, 24)) //true
//   console.log(isNumberInRange(20, 50, 76)) //false

// //----22 завдання автоперерірки---//
// function checkIfCanAccessContent(subType) {
//     const canAccessContent = (subType==="pro" || subType==="vip"); // Change this line

//     return canAccessContent;
//   }

//   console.log(checkIfCanAccessContent("pro")); //true
//   console.log(checkIfCanAccessContent("starter")); //false
//   console.log(checkIfCanAccessContent("vip")); //true
//   console.log(checkIfCanAccessContent("free")); //false

// //----23 завдання автоперерірки---//
// function isNumberNotInRange(start, end, number) {
//     const isInRange = number >= start && number <= end;
//     const isNotInRange = !isInRange; // Change this line

//     return isNotInRange;
//   }

// console.log(isNumberNotInRange(10, 30, 17));//false
// console.log(isNumberNotInRange(10, 30, 5));//true
// console.log(isNumberNotInRange(20, 50, 24));//false
// console.log(isNumberNotInRange(20, 50, 76));//true

// //----24 завдання автоперерірки---//
// function getDiscount(totalSpent) {
//     const BASE_DISCOUNT = 0;
//     const BRONZE_DISCOUNT = 0.02;
//     const SILVER_DISCOUNT = 0.05;
//     const GOLD_DISCOUNT = 0.1;
//     let discount;
//     if (totalSpent>=50000) {
//         discount = GOLD_DISCOUNT;
//     } else if (totalSpent>=20000 && totalSpent<50000) {
//         discount = SILVER_DISCOUNT;
//     } else if (totalSpent>=5000 && totalSpent<20000) {
//         discount = BRONZE_DISCOUNT;
//     } else {
//         discount = BASE_DISCOUNT
//     }

//     return discount;
//   }

//   console.log (getDiscount(137000)) //0.1
//   console.log (getDiscount(46900)) //0.05
//   console.log (getDiscount(18250)) //0.02
//   console.log (getDiscount(1300)) //0
//   console.log (getDiscount(5000)) //0.02
//   console.log (getDiscount(20000)) //0.05
//   console.log (getDiscount(50000)) //0.1

// //----25 завдання автоперерірки---//
// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line

//     message = ordered>available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
//     // if (ordered > available) {
//     //   message = "Not enough goods in stock!";
//     // } else {
//     //   message = "The order is accepted, our manager will contact you";
//     // }

//     // Change code above this line
//     return message;
//   }

//   console.log(checkStorage(100, 50)); //"The order is accepted, our manager will contact you"
//   console.log(checkStorage(100, 130)); //"Not enough goods in stock!"

// //----26 завдання автоперерірки---//
// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//     message = password===ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!"
//     // Change code below this line

//     // Change code above this line
//     return message;
//   }

//   console.log(checkPassword("jqueryismyjam"));// Access is allowed
//   console.log(checkPassword("12lkjkfhbvf"))// "Access denied, wrong password!"

// //----27 завдання автоперерірки---//
// function getSubscriptionPrice(type) {
//     let price;
//     // Change code below this line

//    switch (type) { // Change this line
//       case "starter": // Change this line
//         price = 0; // Change this line
//         break;

//       case "professional": // Change this line
//         price = 20; // Change this line
//         break;

//       case "organization": // Change this line
//         price = 50; // Change this line
//         break;
//     }

//     // Change code above this line
//     return price;
//   }
// console.log(getSubscriptionPrice("professional"));//20
// console.log(getSubscriptionPrice("organization"));//50
// console.log(getSubscriptionPrice("starter"));//0

// //----28 завдання автоперерірки---//
// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//     // Change code below this line
//   switch (password) {
//     case null:
//         message = "Canceled by user!";
//         break;
//     case ADMIN_PASSWORD:
//         message = "Welcome!";
//         break;
//     default:
//         message = "Access denied, wrong password!"

//   }
//     // if (password === null) {
//     //   message = "Canceled by user!";
//     // } else if (password === ADMIN_PASSWORD) {
//     //   message = "Welcome!";
//     // } else {
//     //   message = "Access denied, wrong password!";
//     // }

//     // Change code above this line
//     return message;
//   }

//   console.log(checkPassword("mangohackzor")) //"Access denied, wrong password!"
//   console.log(checkPassword(null)); //"Canceled by user!"
//   console.log(checkPassword("jqueryismyjam")); //Welcome

//----29 завдання автоперерірки---//
// function getShippingCost(country) {
//     let message;
//     // Change code below this line
//     const china = 100;
//     const chile = 250;
//     const australia = 170;
//     const jamaica = 120;
//     switch (country) {
//         case "China":
//             message = `Shipping to China will cost ${china} credits`
//             break;
//         case "Chile":
//             message = `Shipping to Chile will cost ${chile} credits`
//             break;
//         case "Australia":
//             message = `Shipping to Australia will cost ${australia} credits`
//             break;
//         case "Jamaica":
//             message = `Shipping to Jamaica will cost ${jamaica} credits`
//             break;
//         default:
//             message = "Sorry, there is no delivery to your country"
//     }

//     // Change code above this line
//     return message;
//   }

//   console.log(getShippingCost("Australia"));
//   console.log(getShippingCost("Germany"))

//----30 завдання автоперерірки---//
// function getNameLength(name) {
//     const message = `Name ${name} is ${name.length} characters long`; // Change this line

//     return message;
//   }
//  console.log(getNameLength("Poly"))
//  console.log(getNameLength("Harambe"))

//----31 завдання автоперерірки---//
// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length-1];

// // Change code above this line
// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);

//----32 завдання автоперерірки---//
// function getSubstring(string, length) {
//     const substring = string.slice(0,length); // Change this line

//     return substring;
//   }

//   console.log(getSubstring("Hello world", 3))

//----33 завдання автоперерірки---//
// function formatMessage(message, maxLength) {
//     let result;
//     // Change code below this line
//   result = message.length <= maxLength ? message : `${message.slice(0, maxLength)}...`
//     /// Change code above this line

//     return result;
//   }

//   console.log(formatMessage("Curabitur ligula sapien", 16))//"Curabitur ligula..."
//   console.log(formatMessage("Curabitur ligula sapien", 23))//"Curabitur ligula sapien"

//----34 завдання автоперерірки---//
// function normalizeInput(input) {
//     const normalizedInput = input.toLowerCase(); // Change this line

//     return normalizedInput;
//   }

// console.log(normalizeInput("Hello world"))

//----35 завдання автоперерірки---//
// function checkForName(fullName, name) {
//     const result = fullName.includes(name); // Change this line
//      return result;
//    }

// console.log(checkForName("Egor Kolbasov", "Egor"))//true
// console.log(checkForName("Egor Kolbasov", "egor"))//false

//----36 завдання автоперерірки---//
// function checkForSpam(message) {
//     let result;
//     // const blacklist1 = "spam";
//     // const blacklist2 = "sale";
//     // Change code below this line

//     // Change code above this line
//     result = message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale");
//     return result;
//   }

//  console.log(checkForSpam("Latest technology news"));
//  console.log(checkForSpam("Get best sale offers now!"));
//  console.log(checkForSpam("Amazing SalE, only tonight!"))// true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"))// true

// задачки з практики:
//1
// Напишіть код, який запитуватиме
// логін за допомогою prompt і буде виводити результат
// в консоль браузера

// Якщо користувач вводить "Адмін",
// то prompt запитує пароль.
// Якщо нічого не ввели або натиснута клавіша Esc
// вивести рядок "Скасовано"
// Інакше вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести рядок "Привіт!"
// інакше виводити рядок "Невірний пароль!"

//2
// За допомогою циклу for додайте всі парні числа від min до max
//const max = 50;
//const min = 0;

//3
// За допомогою циклу for виведіть всі непарні числа від min до max
//const max = 100;
//const min = 1;

//4
//За допомогою циклу for виведіть всі непарні числа від min до max

//const max = 100;
//const min = 1;

//1
//Оголоси дві змінні, productName для назви товару, і pricePerItem для зберігання ціни за штуку. При оголошенні надай змінним наступні значення:
// назва - рядок "Droid";
// ціна за штуку - число 2000.
// let productName = "Droid";
// let pricePerItem = 2000;
// productName = "Repair droid";
// pricePerItem += 1500;
// console.log(pricePerItem);
// const topSpeed = 160;
// const distnce = 617.54;
// const login = "mango935";
// const isOnline = true;
// const isAdmin = false;
