import { getEndPage } from "./renderStory.js";

export const getUserName = (user, room) => {
  const userNameArea = document.querySelector('.forest__input');
  const entrance = document.querySelector('.forest__app-cover');
  const entrances = document.querySelectorAll('.forest__input-radio');
  const options = document.querySelector('.forest__options');
  const valueOption = document.querySelector('.forest__value-text');
  const forestUsers = document.querySelector('.forest__users-list');

  userNameArea.addEventListener('keyup', () => {
    if (userNameArea.value.length > 4) {
      entrance.classList.remove('visually-hidden');
    }
  })

  entrances.forEach(el => {
    el.addEventListener('click', () => {
      console.log(el.name);

      let keys = Object.keys(localStorage);
      for (let key of keys) {
        const userLi = document.createElement('li');
        userLi.classList.add('forest__item');

        const inputRadio = document.createElement('input');
        inputRadio.classList.add('forest__user-radio');
        inputRadio.type = "radio";
        inputRadio.setAttribute('id', `${key}`);
        inputRadio.value = key;

        const labelRadio = document.createElement('label');
        labelRadio.classList.add('forest__user-label');
        labelRadio.setAttribute('for', `${key}`);

        userLi.append(inputRadio, labelRadio);
        forestUsers.append(userLi);
      }

      for (let key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
          continue;
        }

        if (key === userNameArea.value) {
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

