import { storyBook, Users } from "./script/modules/objects.js";
import { renderFooter, renderHead, renderMain } from "./script/modules/renderPage.js";
import { roomAction } from "./script/modules/renderTask.js";

const init = (storyBook) => {
  const userNew = new Users();
  document.body.append(renderHead(userNew), renderMain(), renderFooter());
  const main = document.querySelector('main');
  roomAction(userNew, main, storyBook);

  document.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('.book__btn_continute')) {
      userNew.lastRoomDone = false;
      const resultNumber = target.closest('.book__btn_continute').dataset.roomNext;
      const roomCurrent = target.closest('.story').dataset.room;
      const room = storyBook[roomCurrent];
      if (roomCurrent === 'predictions') {
        userNew.lastResourses = 0;
        return;
      }

      if (resultNumber != 'oldUser') {
        let nextRoom = room.result[resultNumber];
        userNew.setNewRoom(nextRoom);
      }

      if (resultNumber == 10 || userNew.rooms.slice(-1)[0] == "predictions") {
        if (!userNew.prediction) {
          console.log(room, userNew);

          userNew.setPredictions(room);
        }
      }
      main.innerHTML = '';
      roomAction(userNew, main, storyBook);
    }
  })

  window.onbeforeunload = function (e) {
    if (userNew.lastRoomDone && userNew.lastResourses) {
      userNew.resourses = userNew.resourses + userNew.lastResourses;
      userNew.lastRoomDone = false;
    }
    userNew.setLocalStorage()
  };
}

init(storyBook);


