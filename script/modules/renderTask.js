import { storyBook } from "./objects.js";
import { getEndPage } from "./renderStory.js";

export const hallListener = (overlay, room) => {
  const glowElements = document.querySelectorAll('.hall__glowing');
  let resultNumber;

  for (let glowElement of glowElements) {
    glowElement.addEventListener('click', (e) => {
      const target = e.target;
      resultNumber = target.dataset.room;
      overlay.classList.add('visually-hidden');
      getEndPage(room, resultNumber);
    })
  }
}

export const kitchenListener = (overlay, room) => {
  const dishElements = document.querySelectorAll('.kitchen__link');
  let resultNumber;

  for (let dishElement of dishElements) {
    dishElement.addEventListener('click', (e) => {
      const target = e.target;
      resultNumber = target.dataset.room;
      overlay.classList.add('visually-hidden');
      getEndPage(room, resultNumber);
    })
  }
}

export const storeroomListener = (overlay, room) => {
  let countClick = 0;
  const toggleNumber = Math.floor(Math.random() * 16);
  const squares = document.querySelectorAll('.storeroom__square');
  overlay.addEventListener('click', (e) => {
    const target = e.target;
    countClick = countClick + 1
    Array.from(squares).forEach((square, index, array) => {
      if (target == square) {
        square.style.border = 'none';
        if (toggleNumber == index) {
          overlay.classList.add('storeroom__overlay_close');
          overlay.classList.add('visually-hidden');
          const result = (countClick % 3 === 0) ? countClick : ((Math.floor(countClick / 3) + 1)*3)
          getEndPage(room, result);
        }
        console.log(`${toggleNumber} ${index} ${countClick}`);
      }
    })
  })
}

export const renderTask = () => {
  const buttonTask = document.querySelector('.book__btn_task');

  buttonTask.addEventListener('click', (e) => {
    const target = e.target;
    const roomName = target.closest('.story').dataset.room;
    const room = storyBook[roomName];

    const overlay = document.querySelector(`.${roomName}__overlay`);

    overlay.innerHTML = room.mission;
    if (room.action) {
      room.action();
    };
    buttonTask.classList.add('visually-hidden');

    if (room.listener) {
      room.listener(overlay, room);
    }
  })
}




