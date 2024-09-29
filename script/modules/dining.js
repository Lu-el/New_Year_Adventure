const shuffle = (deck) =>  {
  for (var j, x, i = deck.length; i; j = Math.floor(Math.random() * i), x = deck[--i], deck[i] = deck[j], deck[j] = x);
  return deck;
}

const check = (className, resultsArray) => {
  let element = document.getElementsByClassName("flipped");
  setTimeout(function () {
    for (let i = (element.length - 1); i >= 0; i--) {
      if (!resultsArray
        || element[i].dataset.item === resultsArray[0]) {
        element[i].className = className;
      }
    }
  }, 500);
}

const win = (counter) => {
  if (counter === 6) {
    text.innerHTML = `Ваш результат`;
  }
}

const getresultGame = (attemmpts, clickcounter) => {
  attemmpts.innerHTML = clickcounter;
}

export const diningGameAction = () => {
  const myCards = document.getElementById('container');
  let resultsArray = [];
  let counter = 0;
  let clickcounter = 0;
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
      if (this.className != 'flipped' && this.className != 'correct') {
        this.className = 'flipped';
        let result = this.dataset.item;
        resultsArray.push(result);
      }
      if (resultsArray.length > 1) {
        if (resultsArray[0] === resultsArray[1]) {
          check("correct", resultsArray);
          counter++;
          win(counter);
          resultsArray = [];
        } else {
          check("reverse");
          resultsArray = [];
        }
      }
    }
  };
}
