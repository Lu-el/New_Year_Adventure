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

  console.log(new Date().getFullYear());

  let text = "Год будет для вас ослепительным. От ярких событий и красок иногда захочется закрыть глаза. Наслаждайтесь тем, что принесет этот год. Внимательно смотрите по сторонам, чтобы не упустить  возможность обрести свое счастье. Но помни, не засиживайся в квартире - за твоей дверью уже стоит счастье, осталось только впустить"// Ваш текст
  if ((new Date().getFullYear()) == 2025 ) {
    text += 'С НОВЫМ 2025 ГОДОМ!!!'
  } else {
    text += 'С НАСТУПАЮЩИМ НОВЫМ ГОДОМ!!!'
  }
  const delay = 100; // Скорость печатания
  const elem = document.querySelector(".predictions__overlay"); // id элемента для вывода результата
  printTextFn(text, elem, delay);
  console.log(user);

  setTimeout(() => {
    getEndPage(room, 1, user)
  }, 15000)
}



