import { bookStyle } from "./script/modules/book.js";
import { mottos, storyBook, Users } from "./script/modules/objects.js";
import { renderFooter, renderHead, renderMain } from "./script/modules/renderPage.js";
import { renderStory, renderRoom } from "./script/modules/renderStory.js";
import { renderTask } from "./script/modules/renderTask.js";

const getMissionRoom = (main, data, user) => {
  const story = renderStory(data);
  const room = renderRoom(data);

  main.append(story, room);
  renderTask(user);
}



const roomAction = (user, main, storyBook) => {
  const roomCurrent = user.rooms.slice(-1)[0];
  const room = storyBook[roomCurrent];
  getMissionRoom(main, room, user);
  bookStyle();
}

const init = (storyBook) => {

  const userNew = new Users(15);
  document.body.append(renderHead(), renderMain(), renderFooter());

  const main = document.querySelector('main');

  roomAction(userNew, main, storyBook);

  document.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('.book__btn_continute')) {
      const resultNumber = target.closest('.book__btn_continute').dataset.roomNext;
      const roomCurrent = target.closest('.story').dataset.room;
      if (roomCurrent === 'predictions') {
        return
      }
      const room = storyBook[roomCurrent];
      let nextRoom = room.result[resultNumber];
      console.log(nextRoom);

      userNew.setNewRoom(nextRoom);

      if (resultNumber == 10 || userNew.rooms.slice(-1)[0] == "predictions") {
        if (!userNew.prediction) {
          const randomIndexPred = Math.floor(Math.random() * room.predictions.length);
          const randomIndexMotto = Math.floor(Math.random() * mottos.length);
          userNew.prediction = room.predictions[randomIndexPred];
          userNew.motto = mottos[randomIndexMotto];
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
