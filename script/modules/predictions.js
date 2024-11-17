// где остановился (9 вариантов)
// кол-во уникальных комнат (3 варианта)

import { getEndPage } from "./renderStory.js";





const printTextFn = (text, elem, delay) => {
  if (text.length > 0) {
    elem.innerHTML += text[0];
    setTimeout(() => {
      printTextFn(text.slice(1), elem, delay);
    }, delay
    );
  }
}

export const printText = (user, room) => {
  const text = "Будь осторожен, в этом году ожидается мощный взрыв 一 лопнут все твои завистники."; // Ваш текст
  const delay = 100; // Скорость печатания
  const elem = document.querySelector(".predictions__overlay"); // id элемента для вывода результата
  printTextFn(text, elem, delay);
  console.log(user);

  setTimeout(() => {
    getEndPage(room, 1, user)
  }, 15000)
}



