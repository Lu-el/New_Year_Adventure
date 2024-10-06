import { bookStyle } from "./book.js";
import { getContainer, getSection } from "./functions.js";

export const getEndPage = (room) => {
  const endPage = document.querySelector('.book__pages').lastElementChild;
  const ending = endPage.querySelector('.book__text');
  ending.innerHTML = room.ending;

  const btnContinute = document.createElement('button');
  btnContinute.classList.add('book__btn', 'book__btn_continute');
  btnContinute.innerHTML = 'Идти дальше';

  endPage.append(btnContinute);
}

const getStoryPages = (room) => {
  const titlePage = document.createElement('div');
  titlePage.classList.add('book__page');
  const title = document.createElement('h1');
  title.classList.add('book__title');
  title.innerHTML = room.title;
  titlePage.append(title);

  const descriptionPage = document.createElement('div');
  descriptionPage.classList.add('book__page');
  const description = document.createElement('p');
  description.classList.add('book__text');
  description.innerHTML = room.description;
  descriptionPage.append(description);

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
  // ending.innerHTML = room.ending;
  // const btnContinute = document.createElement('button');
  // btnContinute.classList.add('book__btn', 'book__btn_continute');
  // btnContinute.innerHTML = 'Идти дальше';
  endingPage.append(ending);

  return {titlePage, descriptionPage, taskPage, endingPage};
}

export const renderStory = (room) => {
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

  const bookStory = getStoryPages(room);
  for (let key in bookStory) {
    pages.append(bookStory[key]);
  }

  bookStyle();
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

  const roomImg = document.createElement('img');
  roomImg.classList.add('room__img');
  roomImg.src = room.src;
  roomImg.alt = room.title;
  roomOverlay.append(roomImg);

  roomContainer.append(roomOverlay, overlayMission);

  return roomSection;
}
