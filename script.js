import { storyBook, Users } from "./script/modules/objects.js";
import { renderFooter, renderHead, renderMain } from "./script/modules/renderPage.js";
import { roomAction } from "./script/modules/renderTask.js";

const init = (storyBook) => {
  const userNew = new Users("kitchen");
  document.body.append(renderHead(), renderMain(), renderFooter());
  const main = document.querySelector('main');
  roomAction(userNew, main, storyBook);

  document.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('.book__btn_continute')) {
      const resultNumber = target.closest('.book__btn_continute').dataset.roomNext;
      const roomCurrent = target.closest('.story').dataset.room;
      const room = storyBook[roomCurrent];
      if (roomCurrent === 'predictions') {
        return
      }

      if (resultNumber != 'oldUser') {
        let nextRoom = room.result[resultNumber];
        userNew.setNewRoom(nextRoom);
        console.log(nextRoom, resultNumber);
      }

      if (resultNumber == 10 || userNew.rooms.slice(-1)[0] == "predictions") {
        if (!userNew.prediction) {
          userNew.setPredictions(room);
        }
      }

      console.log(userNew);

      main.innerHTML = '';
      roomAction(userNew, main, storyBook);
    }
  })

  window.onbeforeunload = function (e) {
    userNew.setLocalStorage()
  };
}

init(storyBook);


