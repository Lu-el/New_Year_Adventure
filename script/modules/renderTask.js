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

  //клинуть только по крану! (внести правки в kitchen.js)

  for (let dishElement of dishElements) {
    dishElement.addEventListener('click', (e) => {
      const target = e.target;
      resultNumber = target.dataset.room;
      overlay.classList.add('visually-hidden');
      getEndPage(room, resultNumber);
    })
  }
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

    room.listener(overlay, room);
  })
}




