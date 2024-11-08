import { shuffle } from "./functions.js";
import { storyBook } from "./objects.js";
import { getEndPage } from "./renderStory.js";


const check = (className, resultsArray) => {
  let element = document.getElementsByClassName("dining__card_flipped");
  setTimeout(function () {
    for (let i = (element.length - 1); i >= 0; i--) {
      if (!resultsArray
        || element[i].dataset.item === resultsArray[0]) {
        element[i].className = className;
      }
    }
  }, 500);
}

const win = (counter, text, clickcounter, user) => {
  if (counter === 6) {
    text.innerHTML = `Ваш результат`;
    const resultNumber = (clickcounter <= 20) ? 1 : (clickcounter <= 28) ? 2 : 3;
    getEndPage(storyBook.dining, resultNumber, user);
  }
}

export const diningGameAction = (user) => {

  const myCards = document.querySelector('.dining__game');
  let resultsArray = [];
  let counter = 0;
  let clickcounter = 0;
  const textEnd = document.querySelector('.dining__text_end')
  const attemmpts = document.querySelector('.dining__span_attempt')

  const images = [
    'fireworks',
    'snake',
    'reindeer',
    'santa',
    'mandarin',
    'tree',
  ];
  const clone = images.slice(0); // duplicate array
  const cards = images.concat(clone); // merge to arrays

  shuffle(cards);

  for (let i = 0; i < cards.length; i++) {
    const card = document.createElement('div');
    card.dataset.item = cards[i];
    card.dataset.view = "card";
    myCards.appendChild(card);
    card.onclick = function () {
      clickcounter++;
      attemmpts.innerHTML = clickcounter;
      if (this.className != 'dining__card_flipped' && this.className != 'dining__card_correct') {
        this.className = 'dining__card_flipped';
        let result = this.dataset.item;
        resultsArray.push(result);
      }
      if (resultsArray.length > 1) {
        if (resultsArray[0] === resultsArray[1]) {
          check("dining__card_correct", resultsArray);
          counter++;
          win(counter, textEnd, clickcounter, user);
          resultsArray = [];
        } else {
          check("dining__card_reverse");
          resultsArray = [];
        }
      }
    }
  };
}
