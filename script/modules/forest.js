import { getEndPage } from "./renderStory.js";

export const getUserName = (user, room) => {
  const userNameArea = document.querySelector('.forest__input');
  const entrance = document.querySelector('.forest__app-cover');

  userNameArea.addEventListener('keyup', () => {
    if (userNameArea.value.length > 4) {
      entrance.classList.remove('visually-hidden');
    }
  })

  const entrances = document.querySelectorAll('.forest__input-radio');
  entrances.forEach(el => {

    el.addEventListener('click', () => {
      console.log(el.name);
      if (userNameArea.value && el.checked) {
        getEndPage(room, el.value, user);
        user.name =  userNameArea.value;
        console.log(user);
      }
    })
  })
}
