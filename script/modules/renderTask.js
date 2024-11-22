import { storyBook } from "./objects.js";
import { renderBegining } from "./renderPage.js";
import { getEndPage } from "./renderStory.js";

export const beginigListener = (overlay, room, user) => {
  const buttons = document.querySelectorAll('.begining__button');
  const usersAll = document.querySelector('.begining__users-list');
  let resultNumber;

  for (let button of buttons) {
    button.addEventListener('click', (e) => {

      const overlayButtons = e.target.closest('.begining__buttons');
      overlayButtons.classList.add('visually-hidden');
      resultNumber = button.dataset.room;
      if (resultNumber == 1) {
        console.log(resultNumber == 1);
        getEndPage(room, resultNumber, user);
      } else {
        let keys = Object.keys(localStorage);
        if (!keys.length) {
          overlayButtons.classList.remove('visually-hidden');
          return
        };
        renderBegining(usersAll);

        const viewRadio = () => {
          const users = document.querySelectorAll('input[name="users"]');
          for (let user of users) {
            if (user.checked) {
              return JSON.parse(localStorage[user.value])
            }
          }
        }

        const userChoiсing = document.querySelectorAll('.begining__item');
        userChoiсing.forEach(el => {
          el.addEventListener('click', () => {
            const oldUser = viewRadio();
            if (oldUser) {
              Object.assign(user, oldUser);
              getEndPage(room, resultNumber, user);
            }

          })
        })
      }
    })
  }
}

export const hallListener = (overlay, room, user) => {
  const glowElements = document.querySelectorAll('.hall__glowing');
  let resultNumber;

  for (let glowElement of glowElements) {
    glowElement.addEventListener('click', (e) => {
      const target = e.target;
      resultNumber = target.dataset.room;
      overlay.classList.add('visually-hidden');
      getEndPage(room, resultNumber, user);
    })
  }
}

export const kitchenListener = (overlay, room, user) => {
  const dishElements = document.querySelectorAll('.kitchen__link');
  let resultNumber;

  for (let dishElement of dishElements) {
    dishElement.addEventListener('click', (e) => {
      const target = e.target;
      resultNumber = target.dataset.room;
      overlay.classList.add('visually-hidden');
      getEndPage(room, resultNumber, user);
    })
  }
}

export const storeroomListener = (overlay, room, user) => {
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
          const result = (countClick % 3 === 0) ? countClick : ((Math.floor(countClick / 3) + 1) * 3)
          getEndPage(room, result, user);
        }
        console.log(`${toggleNumber} ${index} ${countClick}`);
      }
    })
  })
}

export const restroomListener = (overlay, room, user) => {
  const doors = overlay.querySelectorAll('.restroom__border');
  let resultNumber;

  for (let door of doors) {
    door.addEventListener('dblclick', (e) => {
      const target = e.target;
      resultNumber = target.dataset.room;
      overlay.classList.add('visually-hidden');
      getEndPage(room, resultNumber, user);
    })
  }
}

export const bedroomListener = (overlay, room, user) => {
  const keys = overlay.querySelectorAll('.bedroom__key');

  const winGame = (e) => {
    const target = e.target.closest('.bedroom__key');

    target.classList.toggle('bedroom__key_checked');
    const keysChecked = overlay.querySelectorAll('.bedroom__key_checked');
    if (keysChecked.length === 2) {
      if (keysChecked[0].dataset.room && keysChecked[0].dataset.room === keysChecked[1].dataset.room) {
        const resultNumber = keysChecked[0].dataset.room;
        keysChecked[0].style.scale = 1.5;
        keysChecked[1].style.scale = 1.5;
        setTimeout(() => {
          overlay.classList.add('visually-hidden');
          getEndPage(room, resultNumber, user);
        }, 1000);
      }
    }
  }

  for (let key of keys) {
    key.addEventListener('click', winGame)
  }
}


export const renderTask = (user) => {
  const buttonTask = document.querySelector('.book__btn_task');

  buttonTask.addEventListener('click', (e) => {
    const target = e.target;
    const roomName = target.closest('.story').dataset.room;
    const room = storyBook[roomName];

    const overlay = document.querySelector(`.${roomName}__overlay`);

    overlay.innerHTML = room.mission;

    if (room.action) {
      room.action(user, room);
    };
    buttonTask.classList.add('visually-hidden');

    if (room.listener) {
      room.listener(overlay, room, user);
    }
  })
}




