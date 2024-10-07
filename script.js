import { storyBook } from "./script/modules/objects.js";
import { renderFooter, renderHead, renderMain } from "./script/modules/renderPage.js";
import { renderStory, renderRoom } from "./script/modules/renderStory.js";
import { renderTask } from "./script/modules/renderTask.js";


// document.body.append(renderHead(), renderMain(), renderFooter());

// const main = document.querySelector('main');

const getMissionRoom = (main, data, user) => {
  const story = renderStory(data);
  const room = renderRoom(data);

  main.append(story, room);
  renderTask(user);
}

const users = {
  rooms: ['hall']
}

const init = (user) => {
  // указать имя

  document.body.append(renderHead(), renderMain(), renderFooter());
  const main = document.querySelector('main');

  const roomCurrent = user.rooms.slice(-1)[0];
  const room = storyBook[roomCurrent];

  getMissionRoom(main, room);

  document.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('.book__btn_continute')) {
      const resultNumber = target.closest('.book__btn_continute').dataset.roomNext;
      const nextRoom = room.result[resultNumber];
      const rooms = user.rooms;
      rooms.push(nextRoom);
      user.rooms = rooms;
      console.log(user);
    }


  })


}

init(users);




// import {rollTheDice} from './script/modules/dice.js';
// import { navAction } from './script/modules/kitchen.js';
// import { popupAction } from './script/modules/popup.js';
// import { bookStyle} from './script/modules/book.js';
// import { turnLight } from './script/modules/storeroom.js';
// import { libraryAction } from './script/modules/library.js';
// import { diningGameAction } from './script/modules/dining.js';
// import { wordMess } from './script/modules/objects.js';
// import { gamePlant } from './script/modules/greenhouse.js';
// import { openDoor } from './script/modules/restroom.js';
// import { bullAndCowsGame } from './script/modules/workroom.js';



// navAction();
// popupAction();
// bookStyle();
// turnLight();
// libraryAction();
// diningGameAction();
// gamePlant(wordMess);
// openDoor();
// bullAndCowsGame();



// buttom__roll
// buttom__name

// const buttonRoll = document.querySelector('.dice__buuton_roll');
// buttonRoll.addEventListener('click', rollTheDice);

// const buttonName = document.querySelector('.buttom__name');
// buttonName.addEventListener('click', editNames);
