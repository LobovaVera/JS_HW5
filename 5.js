"use strict";

/*
Необходимо создать объект, в котором будут объединены два массива en и ru 
так, чтобы в объекте ключами выступали значения из массива en, а значениями 
объекта являлись значения из массива ru.
*/

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = [
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье",
];
function getObjectOfDays(arr1, arr2) {
  const result = {};
  for (let i = 0; i < arr1.length; i++) {
    result[arr2[i]] = arr1[i];
  }
  return result;
}

console.log(getObjectOfDays(ru, en));