export const diningGameAction = () => {
  const myCards = document.getElementById('container');
  let resultsArray = [];
  let counter = 0;
  const text = document.getElementById('text');
  let seconds = "00";
  let tens = "00";
  const appendTens = document.getElementById("tens");
  const appendSeconds = document.getElementById("seconds");
  let Interval;
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
  // Shufffel function

  const shuffle = (o) =>  {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  }

  shuffle(cards);

  for (let i = 0; i < cards.length; i++) {
    const card = document.createElement('div');
    card.dataset.item = cards[i];
    card.dataset.view = "card";
    myCards.appendChild(card);
    card.onclick = function () {
      if (this.className != 'flipped' && this.className != 'correct') {
        this.className = 'flipped';
        var result = this.dataset.item;
        resultsArray.push(result);
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
      }
      if (resultsArray.length > 1) {
        if (resultsArray[0] === resultsArray[1]) {
          check("correct");
          counter++;
          win();
          resultsArray = [];
        } else {
          check("reverse");
          resultsArray = [];
        }
      }
    }
  };
  var check = function (className) {
    var x = document.getElementsByClassName("flipped");
    setTimeout(function () {
      for (var i = (x.length - 1); i >= 0; i--) {
        x[i].className = className;
      }
    }, 500);
  }
  var win = function () {
    if (counter === 6) {
      clearInterval(Interval);
      text.innerHTML = "Ваш результат";
    }
  }
  function startTimer() {
    tens++;
    if (tens < 9) {
      appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
      appendTens.innerHTML = tens;
    }
    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  }

}
