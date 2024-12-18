import { shuffle } from "./functions.js";
import { keys } from "./objects.js"

const getObjectKeys = (arr) => {
  const keysObjects = [];
  arr.forEach((element, index) => {
    const keysObject = {};
    keysObject.name = `key${index}`,
      keysObject.src = `img/keys/key${(index+1)}.svg`,
      keysObjects.push(keysObject);
  });
  return keysObjects;
}

export const bedroomAction = () => {
  const overlay = document.querySelector('.bedroom__overlay');
  const keysSRC = keys;
  const deck = shuffle(getObjectKeys(keysSRC));

  deck.forEach((element, index, arr) => {
    if (index < 3) {
      element.room = index + 1;
      arr.push(element);
    }
  })

  shuffle(deck);

  deck.forEach(element => {
    const div = document.createElement('div');
    div.classList.add('bedroom__key');
    if (element.room) {
      div.dataset.room = element.room;
    }
    const img = document.createElement('img');
    img.classList.add('bedroom__svg');
    img.src = element.src;
    div.append(img);
    overlay.append(div);
  })
}

