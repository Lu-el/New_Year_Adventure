import { shuffle } from "./functions.js";
import { wordMess } from "./objects.js";

const getRandomNumber = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min;
}


export const gamePlant = () => {
  const arr = wordMess;
  const randomNumber = getRandomNumber(0, arr.length);
  const input = document.querySelector('.greenhouse__input');
  const answer = document.querySelector('.greenhouse__answer');
  const word = arr[randomNumber];
  const wordSymbol = Array.from(word);
  const wordShufled = shuffle(wordSymbol);
  const container = document.querySelector('.greenhouse__wrapper');


  const greenhouseError = document.querySelector('.greenhouse__error');

  input.addEventListener("keyup", () => {
    const arrVariant = Array.from(input.value);
    const arrVariantSmall = arrVariant.map(item => item.toLowerCase())
    const lastValue = arrVariantSmall.slice(-1);
    const checking = [];

    if (!wordSymbol.includes(`${lastValue}`)) {
      greenhouseError.classList.toggle('visually-hidden');
      setTimeout(() => {
        greenhouseError.classList.toggle('visually-hidden');
      }, 1000);
      arrVariantSmall.forEach(element => {
        if (wordSymbol.includes(`${element}`)) {
          checking.push(element)
        }
      })
      input.value = checking.join('');
    }

    if (arrVariant.length === word.length || arrVariant.length > word.length) {
      if (arrVariantSmall.join('') === word) {
        // alert('super')
        answer.classList.add('visually-hidden');
        container.innerHTML = '';
        Array.from(word).forEach(element => {
          const card = document.createElement('div');
          card.classList.add('greenhouse__card');
          card.innerHTML = element;
          container.append(card);
        });

      } else {
          greenhouseError.classList.remove('visually-hidden');
      }
    }

  })



  wordShufled.forEach(element => {
    const card = document.createElement('div');
    card.classList.add('greenhouse__card');
    card.innerHTML = element;
    container.append(card)
  });


}
