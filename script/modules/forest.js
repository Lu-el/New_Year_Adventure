import { getEndPage } from "./renderStory.js";

export const getUserName = (user, room) => {
  const userNameArea = document.querySelector('.forest__input');
  const entrance = document.querySelector('.forest__app-cover');
  const entrances = document.querySelectorAll('.forest__input-radio');
  const options = document.querySelector('.forest__options');
  const valueOption = document.querySelector('.forest__value-text');

  if (user.name) {
    userNameArea.value = user.name;
    userNameArea.disabled = 'true';
    entrance.classList.remove('visually-hidden');
  }

  userNameArea.addEventListener('keyup', () => {
    if (userNameArea.value.length > 2) {
      entrance.classList.remove('visually-hidden');
    }
  })

  entrances.forEach(el => {
    el.addEventListener('click', () => {

      for (let key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
          continue;
        }

        if (!user.name && key === userNameArea.value) {
          userNameArea.value = '';
          userNameArea.placeholder = 'Такое имя уже есть';
          entrance.classList.add('visually-hidden');
          return;
        }
      }

      if (userNameArea.value && el.checked) {
        userNameArea.disabled = 'true';
        getEndPage(room, el.value, user);
        user.name = userNameArea.value;
        options.classList.add('visually-hidden');
        valueOption.innerHTML = `Выбран вход ${el.name}`
      }
    })
  })
}

