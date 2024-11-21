import { bookStyle } from "./script/modules/book.js";
import { countSameRoom, randomElement } from "./script/modules/functions.js";
import { mottos, roomList, storyBook } from "./script/modules/objects.js";
import { renderFooter, renderHead, renderMain } from "./script/modules/renderPage.js";
import { renderStory, renderRoom } from "./script/modules/renderStory.js";
import { renderTask } from "./script/modules/renderTask.js";

const getMissionRoom = (main, data, user) => {
  const story = renderStory(data);
  const room = renderRoom(data);

  main.append(story, room);
  renderTask(user);
}

class Users {
  constructor(firstroom, resourses) {
    this.rooms = [firstroom];
    this.resourses = resourses;
  }

  changeResourses(n) {
    if (n) {
      this.resourses = this.resourses - n;
    }
  }

  setLocalStorage() {
    if (this.name) {
      const nameValue = this.name;
      localStorage.setItem(`${nameValue}`, JSON.stringify(this));
    }
  }

  setNewRoom(newRoom) {
    if (!newRoom) {
      newRoom = 'predictions';
    }
    if (countSameRoom(this.rooms, newRoom)) {
      this.setNewRoom(randomElement(roomList, this.rooms.slice(-1)[0], newRoom));
      console.log(this.rooms);
    } else {
      this.rooms.push(newRoom);
    }
  }
}

const roomAction = (user, main, storyBook) => {
  const roomCurrent = user.rooms.slice(-1)[0];
  const room = storyBook[roomCurrent];
  getMissionRoom(main, room, user);
  bookStyle();
}

const init = (storyBook) => {

  const userNew = new Users('begining', 15);
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

      if (nextRoom) {
        userNew.setNewRoom(nextRoom);
      }

      if (resultNumber == 10 || userNew.rooms.slice(-1)[0] == "predictions") {
        nextRoom = "predictions";
        const randomIndexPred = Math.floor(Math.random() * room.predictions.length);
        const randomIndexMotto = Math.floor(Math.random() * mottos.length);
        userNew.prediction = room.predictions[randomIndexPred];
        userNew.motto = mottos[randomIndexMotto];
      }


      main.innerHTML = '';
      roomAction(userNew, main, storyBook);
    }
  })

  window.onbeforeunload = function (e) {
    userNew.setLocalStorage()
  };
}

init(storyBook);
