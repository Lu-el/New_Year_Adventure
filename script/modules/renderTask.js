import { kitchenAction } from "./kitchen.js";
import { storyBook } from "./objects.js";


export const hallAction = () => {
  const buttonTask = document.querySelector('.book__btn_task');

  buttonTask.addEventListener('click', (e) => {
    const target = e.target;
    const roomName = target.closest('.story').dataset.room;
    const room = storyBook[roomName];
    console.log(roomName);

    const overlay = document.querySelector(`.${roomName}__overlay`);
    console.log(overlay);

    overlay.innerHTML = room.mission;
    kitchenAction();
  })
}


