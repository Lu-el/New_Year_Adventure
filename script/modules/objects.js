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
    description: `<p class="book__text">Сегодня 31 декабря. Вы не выспались и настроение не очень, хотя на носу такой праздник.</p>
      <p class="book__text">Всё же вы решили, как и планировали, поехать покататься на ватрушке с друзьями. По дороге на "секретное" место в лесу, лопнула шина и водитель(ваш друг, а не таксист) остановился на обочине, чтобы исправить положение. Вы тоже вышли из машины, чтобы подышать свежим воздухом, прихватив пакет с апельсинами, чтобы угостить друзей. Вокруг была суматоха: каждый пытался посоветовать что-то очень дельное, другие начали играть в снежки.
      <p class="book__text">"Ну уж нет" - подумали вы и осмотревшись вокруг увидели тропинку на снегу в лес. "Полюбуюсь зимой, а вдруг и там можно будет покаться". С этими мыслями вы отправляетесь в лес.</p>
      <p class="book__text">Уже через несколько шагов Вы видите дом, который на картинке.</p>
      <p class="book__text">"Классно оформили... Кажется пора возвращаться" - подумали вы. Но повернувшись, тропинки вы не увидели.</p>
      <p class="book__text">Единственным выходом было обратиться за помощью в этот наверняка жилой дом.</p>`,
    task: `А вот и первое судьбоносное решенние. Выберите вход в дом, которым вы воспользуетесь. Для того чтобы приступить к выполнению задания после ознакомления с его правилами - необходимо нажимать кнопку ниже "Понятно". Как только задание будет выполнено - на последней страницы Книги историй читайте продолжение...`,
    ending: `У вас в руках есть апельсины (оранжевые кружочки над Книгой истории), которые вы будете тратить на прохождение заданий(ведь голод - не тётка). Чем быстрее вы будете справляться с заданиями(меньше подсказок, меньше попыток), тем больше комнат сможете посетить. Как только апельсины закончаться... - что-то произойдёт`,
    src: "img/forest.jpg",
    mission: `


          <div class="forest__fields">
            <input name="userName" class="forest__input"
            placeholder="Введите Ваше имя">
    <form class="forest__app-cover">
      <div class="forest__select-box">
        <input type="checkbox" class="forest__view-button">
        <div class="forest__select-button" >
        <div class="forest__selected-value">
          <span>Вход от трубы</span>
        </div>
      </div>

    <div class="forest__options">
      <div class="forest__option">
        <input class="s-c top" type="radio" name="platform" value="front">
        <input class="s-c bottom" type="radio" name="platform" value="front">
        <i class="fab fa-codepen"></i>
        <span class="label">Слева</span>
        <span class="opt-val">Слева</span>
      </div>

      <div class="forest__option">
        <input class="s-c top" type="radio" name="platform" value="back">
        <input class="s-c bottom" type="radio" name="platform" value="back">
        <i class="fab fa-dribbble"></i>
        <span class="label">Справа</span>
        <span class="opt-val">Справа</span>
      </div>

      <div id="option-bg"></div>
    </div>
  </div>
  </div>
  </form>`,
    result: {
      1: 'hall',
    },
    resourses: {
      1: 0,
    },
  },
  "hall": {
    room: 'hall',
    title: "Гостиная",
    description: `<p class="book__text">Вы зашли в просторную комнату, осмотревшись вы поняли, что это гостиная. </p>
      <p class="book__text">Праздничная елка с огоньками наполнила комнату ароматом хвои, горячий камин согревал воздух, треск дров придавал уют и расслаблял.</p>
      <p class="book__text">Вам захотелось рассмотреть ближе один из предметов комнаты.
      Вы долго, как вам показалось, осматривали вещь. захотелось не только посмотреть, но и пощупать.</p>`,
    task: `Выберите предмет, который с самого начала привлек ваше внимание.
      Если задуманный предмет выделен - кликните по нему, иначе нажмите на один из подсвеченных предметов`,
    ending: `Вы дотронулись и что-то скрипнуло у вас за спиной - это открылась дверь, которую раньше вы не замечали.
      Сквозняк? или там кто-то есть? Вы решаетесь зайти...`,
    src: "img/holl.jpg",
    mission: `
      <div data-room="2" class="hall__glowing hall__glowing_deer"></div>
      <div data-room="3" class="hall__glowing hall__glowing_picture"></div>
      <div data-room="4" class="hall__glowing hall__glowing_fireplace"></div>
      <div data-room="5" class="hall__glowing hall__glowing_lamp"></div>
      <div data-room="9" class="hall__glowing hall__glowing_firtree"></div>`,
    result: {
      2: 'kitchen',
      3: 'storeroom',
      4: 'library',
      5: 'dining',
      9: 'workroom',
    },
    resourses: {
      2: 1,
      3: 1,
      4: 2,
      5: 1,
      9: 2,
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
            <a data-room="3" href="#" class="link kitchen__link">Оливье</a>
            <a data-room="5" href="#" class="link kitchen__link">Гусь с яблоками</a>
            <a data-room="6" href="#" class="link kitchen__link">Мандариновый торт</a>
            <a data-room="8" href="#" class="link kitchen__link">Селедка под шубой</a>
          </div>
          `,
    result: {
      3: 'storeroom',
      5: 'dining',
      6: 'greenhouse',
      8: 'bedroom',
    },
    resourses: {
      3: 1,
      5: 1,
      6: 1,
      8: 1,
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
    resourses: {
      3: 1,
      6: 1,
      9: 1,
      12: 1,
      15: 1,
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
      3: 'kitchen',
      6: 'dining',
      9: 'bedroom',
    },
    resourses: {
      3: 1,
      6: 1,
      9: 1,
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
    resourses: {
      1: 1,
      2: 1,
      3: 1,
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
      1: 'bedroom',
      2: 'library',
      3: 'hall',
    },
    resourses: {
      1: 1,
      2: 2,
      3: 3,
    },
    action: gamePlant,
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
    resourses: {
      1: 1,
      2: 2,
      3: 3,
      6: 4,
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
      1: 'hall',
      2: 'dining',
      3: 'workroom',
    },
    resourses: {
      1: 1,
      2: 2,
      3: 3,
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
    src: "img/workroom.jpg",
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
    resourses: {
      1: 1,
      2: 2,
      3: 3,
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
