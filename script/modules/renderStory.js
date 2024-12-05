import { getContainer, getSection, wordMandarine } from "./functions.js";
import { renderResourses } from "./renderPage.js";

export const getEndPage = (room, resultNumber, user) => {

  const endPage = document.querySelector('.book__pages').lastElementChild;
  const resourseSpend = document.createElement('p');
  resourseSpend.classList.add('book__text');
  const ending = endPage.querySelector('.book__text');

  if (resultNumber != 'oldUser') {
    user.changeResourses(room.resourses[resultNumber]);
  }

  if (!ending.innerHTML) {
    const endingTexts = endPage.querySelectorAll('.book__text');
    endingTexts.forEach(e => {
      e.innerHTML = '';
    })
    // ending.innerHTML = room.ending;
    if (resultNumber === 'oldUser') {
      ending.innerHTML = `Вы продолжите историю там, где в последний раз были. Помните где?`
      resourseSpend.innerHTML = `
        ${user.resourses <= 0 ? 'У вас не осталось мандарин' : `у вас осталось <span class="book__resourse">${user.resourses}</span> ${wordMandarine(user.resourses)}.`}
      `;
    } else {
      if (user.resourses < 0) {
        ending.innerHTML = 'Вы пытаетесь найти чем бы подкрепиться, чтобы продолжить приключение, но в пакете не оказалось мандарин для следующего шага. Обидно, досадно, но что же делать дальше?'
      } else {
        ending.innerHTML = room.ending;
        resourseSpend.innerHTML = `
      ${room.resourses[resultNumber] == 0 ? `Здесь вы были слишком увлечены процессом и совсем забыли подкрепиться и` :
            `Вы потратили здесь <span class="book__resourse">${room.resourses[resultNumber]}</span> ${wordMandarine(room.resourses[resultNumber])} и `}
      ${user.resourses <= 0 ? 'У вас не осталось мандарин' : `у вас осталось <span class="book__resourse">${user.resourses}</span> ${wordMandarine(user.resourses)}.`}`
      }
    }
  }

  const btnContinute = document.createElement('button');
  btnContinute.classList.add('book__btn', 'book__btn_continute');

  if (room.room == 'predictions') {
    btnContinute.innerHTML = 'Конец истории';
    btnContinute.style.cursor = 'auto';
    resourseSpend.innerHTML = '';
  } else {
    btnContinute.innerHTML = 'Идти дальше';
    btnContinute.dataset.roomNext = resultNumber;
  }


  // user.changeResourses(room.resourses[resultNumber]);
  console.log(user);


  if (user.resourses < 0) {
    btnContinute.dataset.roomNext = 10;
  }
  renderResourses(user.resourses);

  endPage.prepend(resourseSpend)
  endPage.append(btnContinute);

}

const getStoryPages = (room, user) => {
  const titlePage = document.createElement('div');
  titlePage.classList.add('book__page');
  const title = document.createElement('h1');
  title.classList.add('book__title');
  title.innerHTML = room.title;
  titlePage.append(title);

  const descriptionPage = document.createElement('div');
  descriptionPage.classList.add('book__page');

  const roomsW = user.rooms.filter(el => (el == room.room));
  descriptionPage.innerHTML = (roomsW.length === 2) ? room.descriptionW : room.description;

  const taskPage = document.createElement('div');
  taskPage.classList.add('book__page');
  const task = document.createElement('p');
  task.classList.add('book__text');
  task.innerHTML = room.task;
  const btnTask = document.createElement('button');
  btnTask.classList.add('book__btn', 'book__btn_task');
  btnTask.innerHTML = 'Понятно';
  taskPage.append(task, btnTask);

  const endingPage = document.createElement('div');
  endingPage.classList.add('book__page');
  const ending = document.createElement('p');
  ending.classList.add('book__text');
  ending.innerHTML = '';
  endingPage.append(ending);

  return { titlePage, descriptionPage, taskPage, endingPage };
}

export const renderStory = (room, user) => {
  const story = getSection('story');
  const storyContainer = getContainer('story');
  story.dataset.room = room.room;
  story.append(storyContainer);

  const book = document.createElement('div');
  book.classList.add('story__book', 'book');
  storyContainer.append(book);

  const pages = document.createElement('div');
  pages.classList.add('book__pages');
  book.append(pages);

  const bookStory = getStoryPages(room, user);
  for (let key in bookStory) {
    pages.append(bookStory[key]);
  }

  // bookStyle();
  return story;
}

export const renderRoom = (room) => {
  const roomSection = getSection(room.room);
  roomSection.dataset.room = room.room;
  const roomContainer = getContainer(room.room);
  const overlayMission = document.createElement('div');
  overlayMission.classList.add(`${room.room}__overlay`);

  roomSection.append(roomContainer);

  const roomOverlay = document.createElement('div');
  roomOverlay.classList.add('room');

  if (room.src) {
    const roomImg = document.createElement('img');
    roomImg.classList.add('room__img');
    roomImg.src = room.src;
    roomImg.alt = room.title;
    roomOverlay.append(roomImg);
  }


  roomContainer.append(roomOverlay, overlayMission);

  return roomSection;
}
