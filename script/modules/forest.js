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
    if (userNameArea.value.length > 4) {
      entrance.classList.remove('visually-hidden');
    }
  })

  entrances.forEach(el => {
    el.addEventListener('click', () => {
      console.log(el.name);

      for (let key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
          continue;
        }

        if (!user.name && key === userNameArea.value) {
          userNameArea.value = 'Такое имя уже есть';
          userNameArea.placeholder = 'Попробуйте снова';
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

