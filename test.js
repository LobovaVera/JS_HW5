"use strict";

// // Задание 1:

// // 1. Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена 
// // дней недели. Выведите на экран “Вторник”.
// const myObject = {
//     1: 'Monday',
//     2: 'Tuesday',
//     3: 'Wednesday',
//     4: 'Thursday',
//     5: 'Friday',
//     6: 'Saturday',
//     7: 'Sunday'
// }
// console.log(myObject[2]);
// // 2. Создайте объект user с ключами 'name', 'surname', 'age'. Выведите в консоль фамилию, имя и возраст одной строкой.
// const user = {
//     name: 'Ivan',
//     surname: 'Ivanov',
//     age: 20
// }
//     console.log(`${user.name} ${user.surname} ${user.age}`);

// // 3. Добавьте в объект user свойство отчество, которое пользователь должен 
// // ввести с клавиатуры.
// user.input = prompt('Введите ваш nickname');
// console.log(`${user.name} ${user.surname} ${user.age} ${user.input}`);
// // 4. Удалите свойство surname.
//  delete user.surname;
//  console.log(`${user.name} ${user.surname} ${user.age} ${user.input}`);
// // Тайминг: 20 минут.
// Задание 2:

// 1. Создайте два массива: первый с названиями дней недели, а второй - с их 
// порядковыми номерами:
// `['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']`
// `[1, 2, 3, 4, 5, 6, 7]`
// const weekdays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const weekdaysNumbers = [1, 2, 3, 4, 5, 6, 7];
// // 2. С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера.
// const weekDaysAndNumbers = {

// };
// for (let i = 0; i < weekdays.length; i++) {
//     weekDaysAndNumbers[weekdays[i]] = weekdaysNumbers[i];
// }

// console.log(weekDaysAndNumbers);

// 3. Создайте объект: `{x: 1, y: 2, z: 3}`. Переберите этот объект циклом и 
// возведите каждый элемент этого объекта в квадрат.

// const myObj = {x: 1, y: 2, z: 3};

// for (const key in myObj) {
//     myObj[key] = myObj[key] * myObj[key];
// }

// console.log(myObj);
// Тайминг: 25 минут.
// Задание 3:

// ```
// Найдите сумму всех чисел, приведенного объекта.
// const obj = {
//     key1: {
//         key1: 1,
//         key2: 2,
//         key3: 3,
//     },
//     key2: {
//         key1: 4,
//         key2: 5,
//         key3: 6,
//     },
//     key3: {
//         key1: 7,
//         key2: 8,
//         key3: 9,
//     },
// }

// let sum = 0;
// let temparr = [];
// const ourArray = Object.values(obj);
// for (let i = 0; i < ourArray.length; i++) {
// temparr.push(Object.values(ourArray[i]).reduce((acc, num) => {return acc + num;})); 
// }
// sum = temparr.reduce((acc, num) => acc+num);
// console.log(sum);
// seminar version
// function getSum(object) {
//     let summ = 0;
//     for (let key in object) {
//         if (typeof object[key] === 'number') {
//             summ += object[key];
//         } else {
//             summ += getSum(object[key]);
//         }
//     }
//     return summ;
// }
// console.log(getSum(obj));
// Задание 4: 

// 1. Создайте объект riddle.
// const riddle = {};
// 2. Добавьте свойства question со значениями(текст загадки) и 
// answer (ответ на загадку).
// riddle.question = "Кто его раздевает, слезы проливает";
// riddle.answer = "лук";
// riddle.hint1 = "сидит дед во сто шуб одет";
// riddle.hint2 = "это овощ";
// riddle.hint3 = "лук";
// 3. Создайте метод askQuestion который спрашивает у пользователя вопрос 
// question и сравнивает ответ с answer.
// В случае верного ответа, необходимо поздравить пользователя.
// В случае, если пользователь ответил неверно, необходимо подсказать, 
// подсказок может быть несколько.
// Если пользователь ответил неверно после всех подсказок, то в консоль 
// выводится текст: “вы проиграли”.

// function askQuestion(riddle, count = 0) {
//     let userAnswer = prompt(riddle.question);

//     if (userAnswer.toLowerCase() === riddle.answer.toLowerCase()) {
//         return "Молодец!";
//     }
//     if (count === 0) {
//         alert(`${riddle.hint1}`);
//         askQuestion(riddle, 1);

//     } else if (count === 1) {
//         alert(`${riddle.hint2}`);
//         askQuestion(riddle, 2);

//     }else if (count === 2) {
//         alert(`${riddle.hint3}`);
//         askQuestion(riddle, 3);
//     }
//     return "Не молодец";


// }
// let a = askQuestion(riddle);
// alert(a);
// seminar version

// const riddle = {
//     question: "Кто его раздевает, слезы проливает",
//     answer: "лук",
//     hints: ["сидит дед во сто wуб одет", "это овощ", "лук"],
//     askQuestion() {
//         let userAnswer = prompt(riddle.question);
//         if (userAnswer.toLowerCase() === this.answer.toLowerCase()) {
//             alert( "Молодец!");
//             return;
//         } else {
//             for (let i = 0; i < this.hints.length; i++) {
//                 userAnswer = prompt(this.hints[i]);
//                 if (userAnswer.toLowerCase() === this.answer.toLowerCase()) {
//                     alert("Молодец");
//                     return;
//                 }
//             }
//            alert("Не молодец");
//            return;
//         }
//     }
// }
// riddle.askQuestion();
// const arr = [1, 2, 3, 4, 5, 6, 7];
// arr.forEach((num, index) => console.log(`index: ${index} number${num}`));
// const arr = [1, 2, 3, 4, 5];
// arr.forEach((num, index) => console.log(`Индекс ${index}, значение ${num}`));
// console.log(arr)
// arr.forEach((num, index) => {
//     if (num === 4) {
//         numCallB(() => {
//             console.log(123);
//         });
//     }
// })
// function numCallB(callback){
//     callback();
// }