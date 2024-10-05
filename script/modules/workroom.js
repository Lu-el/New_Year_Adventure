// Написать игру Быки и коровы
// компьютер загадывает случайное число из 4 разных цифр
// игрок вводит 4 значное число с разными цифрами
// компьтер отображает результат (введённое число: сколько быков, сколько коров)
// если загадано 1234, а введено 1345, то ответ (Попытка 1345: 1 бык 2 коровы)
// 1 бык (единица угадана на своём месте)
// 2 коровы (3 и 4 присутствуют но не на своих местах)

const getRandomNumber = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min;
}

const getComputerNumber = () => {
  const randomNumber = [];
  while (randomNumber.length < 4) {
    let numeric = getRandomNumber(0, 10);
    if (!randomNumber.includes(numeric)) {
      randomNumber.push(numeric);
    }
  }
  return randomNumber.join('');
}

const validateNumber = (userNumber) => {

  if (userNumber.length !== 4 || isNaN(userNumber)) {
    alert("Введите 4 цифры");
    return false;
  }

  for (let i = 0; i < userNumber.length; i++) {
    if (userNumber.split(userNumber[i]).length - 1 > 1) {
      alert("Цифры не должны повторяться");
      return false;
    }
    return true;
  }
}

const getBullsCount = (numberString, secret) => {
  let count = 0;

  for (let i = 0; i < numberString.length; i++) {

    if (numberString[i] === secret[i]) {
      count += 1;
    }
  }
  return count;
}

const getCowsCount = (numberString, secret) => {

  let count = 0;
  for (let i = 0; i < numberString.length; i++) {
    let position = secret.indexOf(numberString[i]);
    if (position !== -1 && position !== i) {
      count += 1;
    }
  }
  return count;
}

const getResult = (numberString, secret, table) => {

  if (validateNumber(numberString)) {

    const bulls = getBullsCount(numberString, secret);
    const cows = getCowsCount(numberString, secret);

    const line = document.createElement('tr');
    line.classList.add('workroom__tr');

    const tryCell = document.createElement('td');
    tryCell.classList.add('workroom__td', 'workroom__td_number');
    tryCell.innerHTML = numberString;

    const bullCell = document.createElement('td');
    bullCell.classList.add('workroom__td', 'workroom__td_bull');
    bullCell.innerHTML = bulls;

    const cowCell = document.createElement('td');
    cowCell.classList.add('workroom__td', 'workroom__td_cow');
    cowCell.innerHTML = cows;

    line.append(tryCell, bullCell, cowCell);

    table.append(line);
  }
}


export const bullAndCowsGame = () => {
  const table = document.querySelector('.workroom__tbody');
  const btnTriing = document.querySelector('.workroom__btn');
  const computerNumber = getComputerNumber();
  const inputElem = document.querySelector('.workroom__input');

  btnTriing.addEventListener('click', () => {
    const userNumber = inputElem.value;
    getResult(userNumber, computerNumber, table);
    inputElem.value = '';
  })

}
