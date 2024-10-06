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

const getCowsCount = (numberString, secret, btn) => {

  let count = 0;
  for (let i = 0; i < numberString.length; i++) {
    let position = secret.indexOf(numberString[i]);
    if (position !== -1 && position !== i) {
      count += 1;
    }
  }
  return count;
}

const getResult = (numberString, secret, table, userArea) => {

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

    if (bulls === 4) {
      userArea.classList.add('visually-hidden');
      line.style.color = 'red';
    }
  }
}


export const bullAndCowsGame = () => {
  const table = document.querySelector('.workroom__tbody');
  const btnTriing = document.querySelector('.workroom__btn');
  const computerNumber = getComputerNumber();
  const inputElem = document.querySelector('.workroom__input');
  const userArea = document.querySelector('.workroom__feedback')

  btnTriing.addEventListener('click', () => {
    const userNumber = inputElem.value;
    getResult(userNumber, computerNumber, table, userArea);
    inputElem.value = '';
  })
}
