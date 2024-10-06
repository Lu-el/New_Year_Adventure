import { storyBook } from "./objects.js";
import { getEndPage } from "./renderStory.js";

export const hallListener = (overlay, room) => {
  const glowElements = document.querySelectorAll('.hall__glowing');
  let resultNumber;
  let nextRoom;

  for (let glowElement of glowElements) {
    glowElement.addEventListener('click', (e) => {
      const target = e.target;
      resultNumber = target.dataset.room;

      overlay.classList.add('visually-hidden');

      getEndPage(room);
      if (document.querySelector('.book__btn_continute')) {
        const continute = document.querySelector('.book__btn_continute');
        continute.addEventListener('click', () => {
          nextRoom = room.result[resultNumber];
          // user.rooms = user.rooms.push(nextRoom);
        })
      }
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
  }

  )


}




