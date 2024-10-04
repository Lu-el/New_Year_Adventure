// Написать игру Быки и коровы
// компьютер загадывает случайное число из 4 разных цифр
// игрок вводит 4 значное число с разными цифрами
// компьтер отображает результат (введённое число: сколько быков, сколько коров)
// если загадано 1234, а введено 1345, то ответ (Попытка 1345: 1 бык 2 коровы)
// 1 бык (единица угадана на своём месте)
// 2 коровы (3 и 4 присутствуют но не на своих местах)

'use strict';

function generateRandomNumber() {
  let rundom = String(Math.floor(1000 + Math.random() * 9000));

  return rundom;
}

// console.log(generateRandomNumber());


function validateNumber(numberString) {
  if (numberString.length !== 4 || isNaN(numberString)) {
    alert("Please enter 4 digits");
    return false;
  }

  for (let i = 0; i < numberString.length; i++) {
    if (numberString.split(numberString[i]).length - 1 > 1) {
      alert("Digits should not be repeated");
      return false;
    }
    return true;
  }
}

function getBullsCount(numberString, secret) {
  let count = 0;

  for (let i = 0; i < numberString.length; i++) {

    if (numberString[i] === secret[i]) {
      count += 1;
    }
  }
  return count;
}

function getCowsCount(numberString, secret) {

  let count = 0;
  for (let i = 0; i < numberString.length; i++) {
    let position = secret.indexOf(numberString[i]);
    if (position !== -1 && position !== i) {
      count += 1;
    }
  }
  return count;
}

let secret = generateRandomNumber();
let prevResults = '';
var num = 0;
let bullsCount = 0;
let cowsCount = 0;

let numberString = prompt('Input your number', "1234");

while (numberString) {

  if (!validateNumber(numberString)) {
    alert("Game Over");
    break;
  }

  // if (numberString = null) {
  //   break;
  // }

  bullsCount = getBullsCount(numberString, secret);
  cowsCount = getCowsCount(numberString, secret);
  num++
  prevResults += "Попытка " + num + " : " + numberString + '==> bulls: ' + bullsCount + ' cows: ' + cowsCount + '\n';

  numberString = prompt(prevResults + 'Input your number', "1234");


}
