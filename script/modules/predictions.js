// где остановился (9 вариантов)
// кол-во уникальных комнат (3 варианта)

import { getEndPage } from "./renderStory.js";

const printTextFn = (text1, elem1, delay) => {
  if (text1.length > 0) {
    elem1.innerHTML += text1[0];
    setTimeout(() => {
      printTextFn(text1.slice(1), elem1, delay);
    }, delay
    );
  }
  }


const wshNewYear = (year) => {
  let text = '';
  if ((new Date().getFullYear()) == year ) {
    text += 'С Новым 2025 Годом'
  } else {
    text += 'С наступающим Новым Годом'
  }
  return text
}

export const printText = (user, room) => {
  const delay = 100; // Скорость печатания

  const title = document.querySelector(".predictions__title");
  const paternName = document.querySelector(".predictions__patern_name"); // id элемента для вывода результата
  const paternText = document.querySelector(".predictions__patern_text");
  const paternWishes = document.querySelector(".predictions__patern_wishes");
  const paternMotto = document.querySelector(".predictions__patern_motto");

  const titleText = `${wshNewYear(2025)}, малыш!`;
  const paternNameText = 'Пишет Вам Дед Мороз! (по сравнению с моим возрастом для меня все люди - малыши)';
  const paternTextText = 'Всю игру я наблюдал за Вами. Вы - молодец, достойно проходили испытания и ни разу не сдались! Я посмотрел Вашу натальную карту, пока Вы осматривали мой дом и вот, что я выяснил.';
  console.log(room);

  const paternWishesText = user.prediction;
  const paternMottoText = `Девиз года: ${user.motto}`;

  printTextFn(titleText, title, delay);

  setTimeout(() => {
    printTextFn(paternNameText, paternName, delay);
  }, ((titleText.length + 3) * delay));

  setTimeout(() => {
    printTextFn(paternTextText, paternText, delay);
  }, ((titleText.length + paternNameText.length + 6) * delay));

  setTimeout(() => {
    printTextFn(paternWishesText, paternWishes, delay);
  }, ((titleText.length + paternNameText.length + paternTextText.length + 9) * delay));

  setTimeout(() => {
    printTextFn(paternMottoText, paternMotto, delay);
  }, ((titleText.length + paternNameText.length + paternTextText.length + paternWishesText.length + 12) * delay));

  setTimeout(() => {
    getEndPage(room, 1, user)
  }, 1000)
}



