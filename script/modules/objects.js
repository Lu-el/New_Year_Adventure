import { diningGameAction } from "./dining.js";
import { gamePlant } from "./greenhouse.js";
import { kitchenAction } from "./kitchen.js";
import { libraryListener } from "./library.js";
import { hallListener, kitchenListener, storeroomListener } from "./renderTask.js";

export const storyBook = {
  "hall": {
    room: 'hall',
    title: "Гостиная",
    description: `Вы зашли в просторную комнату, осмотревшись вы поняли, что это гостиная. Праздничная елка с огоньками наполнила комнату ароматом хвои, горячий камин согревал воздух, треск дров придавал уют и расслаблял.
      Вам захотелось рассмотреть ближе один из предметов комнаты.
      Вы долго, как вам показалось, осматривали вещь. захотелось не только посмотреть, но и пощупать.`,
    task: `Выберите предмет, который с самого начала привлек ваше внимание.
      Если задуманный предмет выделен - кликните по нему, иначе нажмите на один из подсвеченных предметов`,
    ending: `Вы дотронулись и что-то скрипнуло у вас за спиной - это открылась дверь, которую раньше вы не замечали.
      Сквозняк? или там кто-то есть? Вы решаетесь зайти...`,
    src: "img/holl.jpg",
    mission: `
      <div data-room="2" class="hall__glowing hall__glowing_deer"></div>
      <div data-room="3" class="hall__glowing hall__glowing_picture"></div>
      <div data-room="2" class="hall__glowing hall__glowing_fireplace"></div>
      <div data-room="3" class="hall__glowing hall__glowing_lamp"></div>
      <div data-room="2" class="hall__glowing hall__glowing_firtree"></div>`,
    result: {
      1: 'hall',
      2: 'kitchen',
      3: 'storeroom',
      4: 'library',
      5: 'dining',
      6: 'greenhouse',
      7: 'restroom',
      8: 'bedroom',
      9: 'workroom',
    },
    listener: hallListener,
  },
  'kitchen': {
    room: 'kitchen',
    title: "Кухня",
    description: `Вы зашли в просторную комнату, осмотревшись вы поняли, что это гостиная. Праздничная елка с огоньками наполнила комнату ароматом хвои, горячий камин согревал воздух, треск дров придавал уют и расслаблял.
      Вам захотелось рассмотреть ближе один из предметов комнаты.
      Вы долго, как вам показалось, осматривали вещь. захотелось не только посмотреть, но и пощупать.`,
    task: `Выберите предмет, который с самого начала привлек ваше внимание.
      Если задуманный предмет выделен - кликните по нему, иначе нажмите на один из подсвеченных предметов`,
    ending: `Вы дотронулись и что-то скрипнуло у вас за спиной - это открылась дверь, которую раньше вы не замечали.
      Сквозняк? или там кто-то есть? Вы решаетесь зайти...`,
    src: "img/kitchen.jpg",
    mission: `
    <div class="kitchen__links">
            <a data-room="1" href="#" class="link kitchen__link">Оливье</a>
            <a data-room="1" href="#" class="link kitchen__link">Гусь с яблоками</a>
            <a data-room="3" href="#" class="link kitchen__link">Мандариновый торт</a>
            <a data-room="3" href="#" class="link kitchen__link">Селедка под шубой</a>
          </div>
          `,
    result: {
      1: 'hall',
      2: 'kitchen',
      3: 'storeroom',
      4: 'library',
      5: 'dining',
      6: 'greenhouse',
      7: 'restroom',
      8: 'bedroom',
      9: 'workroom',
    },
    action: kitchenAction,
    listener: kitchenListener,
  },
  'storeroom': {
    room: 'storeroom',
    title: "Кладовая",
    description: `Вы зашли в просторную комнату, осмотревшись вы поняли, что это гостиная. Праздничная елка с огоньками наполнила комнату ароматом хвои, горячий камин согревал воздух, треск дров придавал уют и расслаблял.
      Вам захотелось рассмотреть ближе один из предметов комнаты.
      Вы долго, как вам показалось, осматривали вещь. захотелось не только посмотреть, но и пощупать.`,
    task: `Выберите предмет, который с самого начала привлек ваше внимание.
      Если задуманный предмет выделен - кликните по нему, иначе нажмите на один из подсвеченных предметов`,
    ending: `Вы дотронулись и что-то скрипнуло у вас за спиной - это открылась дверь, которую раньше вы не замечали.
      Сквозняк? или там кто-то есть? Вы решаетесь зайти...`,
    src: "img/storeroom.jpg",
    mission: `
            <div class="storeroom__square"></div>
            <div class="storeroom__square"></div>
            <div class="storeroom__square"></div>
            <div class="storeroom__square"></div>
            <div class="storeroom__square"></div>
            <div class="storeroom__square"></div>
            <div class="storeroom__square"></div>
            <div class="storeroom__square"></div>
            <div class="storeroom__square"></div>
            <div class="storeroom__square"></div>
            <div class="storeroom__square"></div>
            <div class="storeroom__square"></div>
            <div class="storeroom__square"></div>
            <div class="storeroom__square"></div>
            <div class="storeroom__square"></div>
          `,
    result: {
      3: 'hall',
      6: 'hall',
      9: 'kitchen',
      12: 'kitchen',
      15: 'kitchen',
    },
    listener: storeroomListener,
  },
  "library": {
    room: 'library',
    title: "Библиотека",
    description: `Вы зашли в просторную комнату, осмотревшись вы поняли, что это гостиная. Праздничная елка с огоньками наполнила комнату ароматом хвои, горячий камин согревал воздух, треск дров придавал уют и расслаблял.
      Вам захотелось рассмотреть ближе один из предметов комнаты.
      Вы долго, как вам показалось, осматривали вещь. захотелось не только посмотреть, но и пощупать.`,
    task: `Выберите предмет, который с самого начала привлек ваше внимание.
      Если задуманный предмет выделен - кликните по нему, иначе нажмите на один из подсвеченных предметов`,
    ending: `Вы дотронулись и что-то скрипнуло у вас за спиной - это открылась дверь, которую раньше вы не замечали.
      Сквозняк? или там кто-то есть? Вы решаетесь зайти...`,
    src: "img/library.jpg",
    mission: `
                          <div class="library__quiz">
            <h2 class="library__question" id="question">Question is loading...</h2>

            <ul class="library__list">
              <li class="library__item">
                <input class="library__answer library__answer_a" type="radio" name="answer" id="a" />
                <label class="library__label library__label_a " for="a" id="a_text">Answer...</label>
              </li>
              <li class="library__item">
                <input class="library__answer library__answer_b" type="radio" name="answer" id="b" />
                <label class="library__label library__label_b" for="b" id="b_text">Answer...</label>
              </li>
              <li class="library__item">
                <input class="library__answer library__answer_c" type="radio" name="answer" id="c" />
                <label class="library__label library__label_c" for="c" id="c_text">Answer...</label>
              </li>
              <li class="library__item">
                <input class="library__answer library__answer_d" type="radio" name="answer" id="d" />
                <label class="library__label library__label_d" for="d" id="d_text">Answer...</label>
              </li>
            </ul>
          </div>

          <button class="library__btn" id="submit">Готово</button>`,
    result: {
      // 3: 'kitchen',
      // 6: 'bedroom',
      // 9: 'dining',
      3: 'kitchen',
      6: 'kitchen',
      9: 'hall',
    },
    listener: libraryListener,
  },
  "dining": {
    room: 'dining',
    title: "Столовая",
    description: `Вы зашли в просторную комнату, осмотревшись вы поняли, что это гостиная. Праздничная елка с огоньками наполнила комнату ароматом хвои, горячий камин согревал воздух, треск дров придавал уют и расслаблял.
      Вам захотелось рассмотреть ближе один из предметов комнаты.
      Вы долго, как вам показалось, осматривали вещь. захотелось не только посмотреть, но и пощупать.`,
    task: `Выберите предмет, который с самого начала привлек ваше внимание.
      Если задуманный предмет выделен - кликните по нему, иначе нажмите на один из подсвеченных предметов`,
    ending: `Вы дотронулись и что-то скрипнуло у вас за спиной - это открылась дверь, которую раньше вы не замечали.
      Сквозняк? или там кто-то есть? Вы решаетесь зайти...`,
    src: "img/diningroom.jpg",
    mission: `
          <p class="dining__text">Попыток
            <span class="dining__span dining__span_attempt">0</span>
          </p>
          <p class="dining__text dining__text_end"></p>
          <div class="dining__game">
          </div>
      `,
    result: {
      // 3: 'kitchen',
      // 6: 'bedroom',
      // 9: 'dining',
      1: 'hall',
      2: 'kitchen',
      3: 'storeroom',
    },
    action: diningGameAction,
    // listener: libraryListener,
  },
  "greenhouse": {
    room: 'greenhouse',
    title: "Двор",
    description: `Вы зашли в просторную комнату, осмотревшись вы поняли, что это гостиная. Праздничная елка с огоньками наполнила комнату ароматом хвои, горячий камин согревал воздух, треск дров придавал уют и расслаблял.
      Вам захотелось рассмотреть ближе один из предметов комнаты.
      Вы долго, как вам показалось, осматривали вещь. захотелось не только посмотреть, но и пощупать.`,
    task: `Выберите предмет, который с самого начала привлек ваше внимание.
      Если задуманный предмет выделен - кликните по нему, иначе нажмите на один из подсвеченных предметов`,
    ending: `Вы дотронулись и что-то скрипнуло у вас за спиной - это открылась дверь, которую раньше вы не замечали.
      Сквозняк? или там кто-то есть? Вы решаетесь зайти...`,
    src: "img/greenhouse.jpg",
    mission: `
                    <div class="greenhouse__wrapper">

          </div>

          <p class="greenhouse__answer">
            <span class="greenhouse__check">
              <input class="greenhouse__input" type="text" placeholder="Ваш ответ">

              <span class="greenhouse__border-light"></span>
              <span class="greenhouse__btn"></span>
              <span class="greenhouse__error visually-hidden">Неправильно</span>
            </span>
          </p>
      `,
    result: {
      // 3: 'kitchen',
      // 6: 'bedroom',
      // 9: 'dining',
      1: 'hall',
      2: 'kitchen',
      3: 'storeroom',
    },
    action: gamePlant,
    // listener: libraryListener,
  },
}

export const wordMess = [
  'дуб',
  // 'апельсин',
  // 'зверобой',
  // 'картофель',
  // 'броколли',
  // 'виноград',
  // 'грибница',
  // 'мандарин',
  // 'тюльпан',
  // 'ежевика',
]

//library
export const quizData = [
  {
    question: "Сколько лет прожил старик со своей старухой в «Сказке о Рыбаке и Рыбке»? ",
    a: "25",
    b: "30",
    c: "33",
    d: "31",
    correct: "c",
  },
  {
    question: "Что такое «ланиты»?",
    a: "Лапти",
    b: "Глаза",
    c: "Уши",
    d: "Щёки",
    correct: "d",
  },
  {
    question: "Как зовут королевича в «Сказке о мертвой царевне»?",
    a: "Матвей",
    b: "Василий",
    c: "Елисей",
    d: "Иван",
    correct: "c",
  },
  {
    question: "Автор романа «Приключения Робинзона Крузо»",
    a: "Д.Дефо",
    b: "Д.Лондон",
    c: "В.Жуковский",
    d: "Ф.Купер",
    correct: "a",
  },
  {
    question: "Сколько лет прожил старик со своей старухой в «Сказке о Рыбаке и Рыбке»? ",
    a: "25",
    b: "30",
    c: "33",
    d: "31",
    correct: "c",
  },
  {
    question: "Что такое «ланиты»?",
    a: "Лапти",
    b: "Глаза",
    c: "Уши",
    d: "Щёки",
    correct: "d",
  },
  {
    question: "Как зовут королевича в «Сказке о мертвой царевне»?",
    a: "Матвей",
    b: "Василий",
    c: "Елисей",
    d: "Иван",
    correct: "c",
  },
  {
    question: "Автор романа «Приключения Робинзона Крузо»",
    a: "Д.Дефо",
    b: "Д.Лондон",
    c: "В.Жуковский",
    d: "Ф.Купер",
    correct: "a",
  },
  {
    question: "Автор романа «Приключения Робинзона Крузо»",
    a: "Д.Дефо",
    b: "Д.Лондон",
    c: "В.Жуковский",
    d: "Ф.Купер",
    correct: "a",
  },
];
