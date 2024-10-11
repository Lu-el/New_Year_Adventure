import { bedroomAction } from "./bedroom.js";
import { diningGameAction } from "./dining.js";
import { gamePlant } from "./greenhouse.js";
import { kitchenAction } from "./kitchen.js";
import { libraryListener } from "./library.js";
import { bedroomListener, hallListener, kitchenListener, restroomListener, storeroomListener } from "./renderTask.js";
import { openDoor } from "./restroom.js";
import { bullAndCowsGame } from "./workroom.js";

export const storyBook = {
  "forest": {
    room: 'forest',
    title: "Начало",
    description: `Вы зашли в просторную комнату, осмотревшись вы поняли, что это гостиная. Праздничная елка с огоньками наполнила комнату ароматом хвои, горячий камин согревал воздух, треск дров придавал уют и расслаблял.
      Вам захотелось рассмотреть ближе один из предметов комнаты.
      Вы долго, как вам показалось, осматривали вещь. захотелось не только посмотреть, но и пощупать.
      Вы зашли в просторную комнату, осмотревшись вы поняли, что это гостиная. Праздничная елка с огоньками наполнила комнату ароматом хвои, горячий камин согревал воздух, треск дров придавал уют и расслаблял.
      Вам захотелось рассмотреть ближе один из предметов комнаты.
      Вы долго, как вам показалось, осматривали вещь. захотелось не только посмотреть, но и пощупать.`,
    task: `Выберите предмет, который с самого начала привлек ваше внимание.
      Если задуманный предмет выделен - кликните по нему, иначе нажмите на один из подсвеченных предметов`,
    ending: `Вы дотронулись и что-то скрипнуло у вас за спиной - это открылась дверь, которую раньше вы не замечали.
      Сквозняк? или там кто-то есть? Вы решаетесь зайти...`,
    src: "img/forest.jpg",
    mission: ``,
    result: {
      1: 'hall',
    },
  },
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
      2: 'kitchen',
      3: 'storeroom',
      4: 'library',
      5: 'dining',
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
      3: 'storeroom',
      5: 'dining',
      6: 'greenhouse',
      8: 'bedroom',
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
      3: 'library',
      6: 'greenhouse',
      9: 'restroom',
      12: 'bedroom',
      15: 'workroom',
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
      6: 'dining',
      9: 'bedroom',
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
      1: 'greenhouse',
      2: 'restroom',
      3: 'workroom',
    },
    action: diningGameAction,
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
      1: 'hall',
      2: 'library',
      3: 'bedroom',
    },
    action: gamePlant,
    // listener: libraryListener,
  },
  "restroom": {
    room: 'restroom',
    title: "Туалет",
    description: `Вы зашли в просторную комнату, осмотревшись вы поняли, что это гостиная. Праздничная елка с огоньками наполнила комнату ароматом хвои, горячий камин согревал воздух, треск дров придавал уют и расслаблял.
      Вам захотелось рассмотреть ближе один из предметов комнаты.
      Вы долго, как вам показалось, осматривали вещь. захотелось не только посмотреть, но и пощупать.`,
    task: `Выберите предмет, который с самого начала привлек ваше внимание.
      Если задуманный предмет выделен - кликните по нему, иначе нажмите на один из подсвеченных предметов`,
    ending: `Вы дотронулись и что-то скрипнуло у вас за спиной - это открылась дверь, которую раньше вы не замечали.
      Сквозняк? или там кто-то есть? Вы решаетесь зайти...`,
    src: "img/restroom.webp",
    mission: `
          <div data-room="1" class="restroom__border">
            <div class="restroom__door">
            </div>
          </div>
          <div data-room="2" class="restroom__border">
            <div class="restroom__door">
            </div>
          </div>
          <div data-room="4" class="restroom__border">
            <div class="restroom__door">
            </div>
          </div>
          <div data-room="6" class="restroom__border">
            <div class="restroom__door">
            </div>
          </div>
      `,
    result: {
      1: 'hall',
      2: 'kitchen',
      4: 'library',
      6: 'greenhouse',
    },
    action: openDoor,
    listener: restroomListener,
  },
  "bedroom": {
    room: 'bedroom',
    title: "Спальня",
    description: `Вы зашли в просторную комнату, осмотревшись вы поняли, что это гостиная. Праздничная елка с огоньками наполнила комнату ароматом хвои, горячий камин согревал воздух, треск дров придавал уют и расслаблял.
      Вам захотелось рассмотреть ближе один из предметов комнаты.
      Вы долго, как вам показалось, осматривали вещь. захотелось не только посмотреть, но и пощупать.`,
    task: `Выберите предмет, который с самого начала привлек ваше внимание.
      Если задуманный предмет выделен - кликните по нему, иначе нажмите на один из подсвеченных предметов`,
    ending: `Вы дотронулись и что-то скрипнуло у вас за спиной - это открылась дверь, которую раньше вы не замечали.
      Сквозняк? или там кто-то есть? Вы решаетесь зайти...`,
    src: "img/bedroom.jfif",
    mission: '',
    result: {
      0: 'hall',
      1: 'dining',
      2: 'workroom',
    },
    action: bedroomAction,
    listener: bedroomListener,
  },
  "workroom": {
    room: 'workroom',
    title: "Кабинет",
    description: `Вы зашли в просторную комнату, осмотревшись вы поняли, что это гостиная. Праздничная елка с огоньками наполнила комнату ароматом хвои, горячий камин согревал воздух, треск дров придавал уют и расслаблял.
      Вам захотелось рассмотреть ближе один из предметов комнаты.
      Вы долго, как вам показалось, осматривали вещь. захотелось не только посмотреть, но и пощупать.`,
    task: `Выберите предмет, который с самого начала привлек ваше внимание.
      Если задуманный предмет выделен - кликните по нему, иначе нажмите на один из подсвеченных предметов`,
    ending: `Вы дотронулись и что-то скрипнуло у вас за спиной - это открылась дверь, которую раньше вы не замечали.
      Сквозняк? или там кто-то есть? Вы решаетесь зайти...`,
    src: "/img/workroom.jpg",
    mission: `
              <div class="workroom__wraper">
            <h2 class="workroom__title">Быки и коровы</h2>

            <table class="workroom__table">
              <thead class="workroom__thead">
                <tr class="workroom__tr">
                  <th class="workroom__td">
                    Попытка
                  </th>
                  <th class="workroom__td">
                    Быки
                  </th>
                  <th class="workroom__td">
                    Коровы
                  </th>
                </tr>
              </thead>
              <tbody class="workroom__tbody">
              </tbody>
            </table>
            <div class="workroom__feedback">
              <input class="workroom__input" type="number" placeholder="Ваш ответ">
              <button class="workroom__btn">Попытка</button>
            </div>
          </div>
          `,
    result: {
      1: 'kitchen',
      2: 'greenhouse',
      3: 'restroom',
    },
    action: bullAndCowsGame,
  },
}

export const wordMess = [
  'апельсин',
  'зверобой',
  'картофель',
  'броколли',
  'виноград',
  'грибница',
  'мандарин',
  'тюльпан',
  'ежевика',
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

export const keys = [
  'img/keys/key1.svg',
  'img/keys/key2.svg',
  'img/keys/key3.svg',
  'img/keys/key4.svg',
  'img/keys/key5.svg',
  'img/keys/key6.svg',
  'img/keys/key7.svg',
  'img/keys/key8.svg',
  'img/keys/key9.svg',
  'img/keys/key10.svg',
  'img/keys/key11.svg',
  'img/keys/key12.svg'
]
