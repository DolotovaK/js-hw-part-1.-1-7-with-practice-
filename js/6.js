//------КОНСПЕКТ-------------//

/*1.
 Навігація по DOM
 */

// console.log(document);
// const body = document.body;
// console.log(body);
// const list = body.firstElementChild;
// console.log(list);
// const firstListItem = list.firstElementChild;
// console.log(firstListItem);
// const listItems = list.children;
// console.log(listItems);
// const arr = [...listItems];
// console.log(arr);

/* 2.
Пошук елементів
 */

// const listWithId = document.querySelector("#menu");
// listWithId.style.textTransform = "uppercase";
// console.log(listWithId);

// const listWithClass = document.querySelector(".menu");
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = "tomato";
// console.log(firstMenuItem);

/* 3.
Властивості та атрибути
 */

// value - містить поточний текстовий контент елементів форм.
// checked - зберігає стан чекбокса або радіокнопки.
// name - зберігає значення, вказане в HTML-атрибуті name.
// src - шлях до зображення тегу <img>.

// const message = document.querySelector("#message");
// console.log(message.value);

// const activeLink = document.querySelector(".btn.active");
// console.log(activeLink.href);

// const image = document.querySelector(".image");
// console.log(image.src);
// image.src = "https://placeimg.com/640/480/tech";

/* 3.1 Властивість textContent*/
//elem.textContent повертає текстовий контент всередині елемента. Доступний для читання і запису. Неважливо, що буде передано в textContent, дані завжди будуть записані як текст.
// const text = document.querySelector(".article-text");
// console.log(text.textContent);

// const title = document.querySelector(".article-title");
// title.textContent = "Welcome to Bahamas!";
/* 3.2 Властивість classList*/
// У властивості classList зберігається об'єкт з методами для роботи з класами елемента.
// elem.classList.contains(cls) - повертає true або false, залежно від наявності класу cls в елемента.
// elem.classList.add(cls) - додає клас cls до списку класів елемента.
// elem.classList.remove(cls) - видаляє клас cls зі списку класів елемента.
// elem.classList.toggle(cls) - якщо відсутній клас cls, то додає його, якщо - присутній, навпаки - видаляє.
// elem.classList.replace(oldClass, newClass) - замінює існуючий клас oldClass на вказаний newClass.

// const text = document.querySelector("#paragraph");
// console.log(text.classList);

// console.log(text.classList.contains("red"));

// text.classList.remove("big");
// console.log(text.classList);

// text.classList.add("new-class");
// console.log(text.classList);

// // Can add multiple classes
// // text.classList.add("a", "b", "c");
// // console.log(text.classList);

// text.classList.toggle("is-hidden");
// console.log(text.classList);
// text.classList.toggle("is-hidden");
// console.log(text.classList);

// // classList has a forEach method
// text.classList.forEach((el) => {
//   console.log("class:", el);
// });

/* 3.3 Атрибути*/
// DOM-елементам відповідають HTML-теги, які містять текстові атрибути. Доступ до атрибутів здійснюється за допомогою стандартних методів. Ці методи працюють зі значенням, яке знаходиться в HTML.

// elem.hasAttribute(name) - перевіряє наявність атрибута, повертає true або false.
// elem.getAttribute(name) - отримує значення атрибута і повертає його.
// elem.setAttribute(name, value) - встановлює атрибут.
// elem.removeAttribute(name) - видаляє атрибут.
// elem.attributes - властивість, що повертає об'єкт усіх атрибутів елемента.

// const image = document.querySelector(".image");
// console.log(image.attributes);

// console.log(image.hasAttribute("src"));
// console.log(image.getAttribute("alt"));

// image.setAttribute("alt", "Amazing nature");
// console.log(image.getAttribute("alt"));

/* 3.4 data-атрибути*/
//Дозволяють додати до тегу довільний атрибут і отримати його значення в JavaScript. Цю можливість використовують для того, щоб спростити написання коду, наприклад, зв'язати дані і розмітку за унікальним ідентифікатором, вказати тип дії кнопки тощо.
//Для отримання значення data-атрибута використовується властивість dataset, після якого стоїть ім'я атрибута. Тобто data- відкидається, а інша частина імені записується як ім'я властивості об'єкта.
// const saveBtn = document.querySelector('.editor button[data-action="save"]');
// const closeBtn = document.querySelector('.editor button[data-action="close"]');
// console.log(saveBtn);
// console.log(closeBtn);
// console.log(saveBtn.dataset.action);
// console.log(closeBtn.dataset.action);
// const dishes = document.querySelectorAll(".dishes > li");
// console.log(dishes);
// dishes.forEach((dish) => {
//   console.log(dish.dataset.id);
// });

/* 4.
Створення та видалення елементів
 */
//Створення;
// document.createElement(tagName);

// Створює елемент з ім'ям tagName і повертає посилання на нього як результат свого виконання. tagName - це рядок, що вказує тип елемента, який створюється. Елемент створюється в пам'яті, в DOM його ще немає.
// const heading = document.createElement("h1");
// console.log(heading);
// heading.textContent = "This is a heading";
// const image = document.createElement("img");
// image.alt = "Nature";
// image.src = "https://placeimg.com/640/480/nature";
// console.log(image);
// //додавання
// const header = document.querySelector("header");
// header.after(heading, image);

//Додавання
//Щоб створений елемент відображався на сторінці, його необхідно додати до вже існуючого елемента в DOM-дереві. Припустимо, що додаємо до певного елемента element, для цього існують методи.

// element.append(el1, el2, ...) - додає один або декілька елементів після всіх дітей елемента element.
// element.prepend(el1, el2, ...) - додає один або декілька елементів перед усіма дітьми елемента element.
// element.after(el1, el2, ...) - додає один або декілька елементів після елемента element.
// element.before(el1, el2, ...) - додає один або декілька елементів перед елементом element.
// У всіх цих методах el - це елементи або рядки, в будь-якому поєднанні і кількості. Рядки додаються як текстові вузли.

// const list = document.querySelector(".usernames");
// // Adds an item to the end of the list
// const lastItem = document.createElement("li");
// lastItem.textContent = "Poly";
// list.append(lastItem);
// console.log(list.children);
// // Adds an item to the beginning of the list

// const firstItem = document.createElement("li");
// firstItem.textContent = "Ájax";
// list.prepend(firstItem);
// console.log(list.children);

// const text = document.createElement("p");
// text.textContent =
//   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi";
// text.setAttribute("class", "text");
// list.after(text);

//Видалення
//Для того, щоб видалити елемент, використовується метод remove(). Він викликається на елементі elem, який необхідно видалити
// text.remove();

/* 5.
Властивість innerHTML
 */
//Читання
//Властивість innerHTML зберігає вміст елемента, включно з тегами, у вигляді рядка. Значення, що повертається, - це завжди валідний HTML-код.

// const article = document.querySelector(".article");
// console.log(article.innerHTML);

// const title = document.querySelector(".article .title");
// console.log(title.innerHTML);

// const text = document.querySelector(".article .text");
// console.log(text.innerHTML);

// //Зміна
// title.innerHTML = 'New and <span class="accent"> improved </span> title';
// //Якщо у властивість innerHTML записати порожній рядок, то вміст елемента буде очищено. Це простий і швидкий спосіб видалення всього вмісту.
// text.innerHTML = "";
//Однотипна (шаблонна) розмітка створюється із масиву даних. Прийом полягає у перебиранні цього масиву і складанні одного рядка з HTML-тегами, який потім записуємо в innerHTML елемента.

// const tehnologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");
// // const markup = tehnologies
// //   .map((tehnology) => `<li class="list-item">${tehnology}</li>`)
// //   .join("");
// // console.log(markup);
// //метод reduce
// const markup = tehnologies.reduce(
//   (acc, tehnology) => acc + `<li class="list-item">${tehnology}</li>`,
//   ""
// );

// list.innerHTML = markup;

//Додавання
//Зміна elem.innerHTML повністю видалить і повторно створить всі нащадки елемента elem. Якщо елемент спочатку не був порожній, то виникнуть додаткові витрати на серіалізацію вже існуючої розмітки, а це погано.
// const article = document.querySelector(".article");
// const htmlString = `<p class="article-test">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit</p> <a class="link" href="#">Read more...</a>`;
// // Replace += with = operator. See the difference?
// // Article title is lost because we overwrite element content.
// article.innerHTML = htmlString;
// // article.innerHTML += htmlString;

//Метод insertAdjacentHTML()
//Сучасний метод для додавання рядка з HTML-тегами перед, після або всередину елемента. Вирішує проблему innerHTML з повторною серіалізацією вмісту елемента під час додавання розмітки до вже існуючої.
//elem.insertAdjacentHTML(position, string);
//Аргумент position - це рядок, позиція щодо елемента elem.
//"beforebegin" - перед elem
// "afterbegin" - всередині elem, перед усіма дітьми
// "beforeend" - всередині elem, після усіх дітей
// "afterend" - після elem

// const list = document.querySelector(".list");
// const newTehnologies = ["React", "TypeScript", "Node.js"];
// // const markup = newTehnologies
// //   .map((tehnology) => `<li class="list-item new">${tehnology}</li>`)
// //   .join("");
// //reduce
// const markup = newTehnologies.reduce(
//   (acc, tehnology) => acc + `<li class="list-item new">${tehnology}</li>`,
//   ""
// );
// list.insertAdjacentHTML("beforeend", markup);

/* 6.
----ПОДІЇ----------------------------------------
 */
//Метод addEventListener()​
//Додає слухача події на елемент.
// element.addEventListener(event, handler, options);
// event - ім'я події, рядок, наприклад "click".
// handler - колбек-функція, яка буде викликана під час настання події.
// options - необов'язковий об'єкт параметрів з розширеними налаштуваннями.
// const singleBtn = document.querySelector("#single");
// const handleclick = () => {
//   console.log("click event listener callback");
// };
// singleBtn.addEventListener("click", handleclick);

// const multiBtn = document.querySelector("#multiple");
// const firstCallback = () => {
//   console.log("First callback!");
// };
// const secondCallback = () => {
//   console.log("Second callback!");
// };
// const thirdCallback = () => {
//   console.log("Third callback!");
// };

// multiBtn.addEventListener("click", firstCallback);
// multiBtn.addEventListener("click", secondCallback);
// multiBtn.addEventListener("click", thirdCallback);
