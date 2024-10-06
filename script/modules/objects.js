import { kitchenAction } from "./kitchen.js"
import { hallListener } from "./renderTask.js"

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
      <div data-room="1" class="hall__glowing hall__glowing_deer"></div>
      <div data-room="1" class="hall__glowing hall__glowing_picture"></div>
      <div data-room="1" class="hall__glowing hall__glowing_fireplace"></div>
      <div data-room="1" class="hall__glowing hall__glowing_lamp"></div>
      <div data-room="1" class="hall__glowing hall__glowing_firtree"></div>`,
      result: {
        1: 'kitchen',
        // 2: 'storeroom',
        // 3: 'library',
        // 4: 'dining',
        // 9: 'workroom',
      },
      listener: hallListener,
  },
  "kitchen": {
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
            <a href="#" class="link kitchen__link">Оливье</a>
            <a href="#" class="link kitchen__link">Гусь с яблоками</a>
            <a href="#" class="link kitchen__link">Мандариновый торт</a>
            <a href="#" class="link kitchen__link">Селедка под шубой</a>
          </div>
          `,
    action: kitchenAction,
  },
}

export const wordMess = [
  'магнолия',
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

export const users = {
  rooms: ['hall']
}
