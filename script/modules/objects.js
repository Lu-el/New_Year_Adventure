import { bedroomAction } from "./bedroom.js";
import { diningGameAction } from "./dining.js";
import { getUserName } from "./forest.js";
import { gamePlant } from "./greenhouse.js";
import { kitchenAction } from "./kitchen.js";
import { libraryListener } from "./library.js";
import { printText } from "./predictions.js";
import { bedroomListener, beginigListener, hallListener, kitchenListener, restroomListener, storeroomListener } from "./renderTask.js";
import { openDoor } from "./restroom.js";
import { bullAndCowsGame } from "./workroom.js";

export const roomList = [
  "hall",
  'kitchen',
  'storeroom',
  "library",
  "dining",
  "greenhouse",
  "restroom",
  "bedroom",
  "workroom"
]

const predictions = [
  {
    "hall": {
      bigVariant: "Год будет для вас ослепительным. От ярких событий и красок иногда захочется закрыть глаза. Наслаждайтесь тем, что принесет этот год. Внимательно смотрите по сторонам, чтобы не упустить  возможность обрести свое счастье.",
      variant: [
        'Не засиживайся в квартире - за твоей дверью уже стоит счастье, осталось только впустить',
        "Не забывай про самое главное - внимательно следи за своим здоровьем.",
        "Интуиция не подведет тебя в этом году - слушай то, что подсказывает тебе голос души"
      ],
      prediction: ['Год будет для вас ослепительным. От ярких событий и красок иногда захочется закрыть глаза. Наслаждайтесь тем, что принесет этот год. Внимательно смотрите по сторонам, чтобы не упустить возможность обрести свое счастье.',
        'Год для вас будет благополучным. Все поводы волноваться останутся в прошлом. Семья и близкие будут радовать, коллеги по работе помогут в новом проекте. Денежных средств будет хватать и на отдых, и на инвестиции в свое будущее.'
      ]
    }
  },
  {
    'kitchen': {
      variant: [
        'Совсем скоро ты встретишь интересного человека, но для этого надо пообщаться с остальными.',
        "Повезет в денежных вопросах, поэтому побольше их задавай",
        "Будешь много плакать, но только от радости.",
      ],
      prediction: ['Год для вас будет очень доходным. К вам не только устремятся новые денежные потоки, но и поступят предложения о выгодном инвестировании. Приятными покупками станут новый автомобиль или уютная квартира.',
        'Год для вас будет наполнен страстью. Вы давно ждали, чтобы внутри порхали бабочки, и приятная теплота разносилась по телу от прикосновения близкого человека. Новый прилив чувств может полностью поглотить вас. Страсть откроется и в работе, где захочется добиться намеченных ранее целей.'
      ]
    }
  },
  {
    'storeroom': {
      variant: [
        "Тебя ожидает интересное путешествие.",
        "Она тебя будет преследлвать везде, особенно в начинаниях - удача.",
        "Весь год будут помогать люди, которые сейчас рядом, так что будь вежлив"
      ],
      prediction: [
        'Год для вас будет наполнен сюрпризами. Все они будут приятными, поэтому опасаться их не стоит. Наоборот, приготовьтесь к тому, что может потребоваться полная перезагрузка в жизни, чтобы насладиться предстоящим счастьем.',
        'Год для вас будет романтичным. Откройте свое сердце для любви и перестаньте бояться быть счастливым человеком. В ответ вы получите поток нежности, о которой так мечтали. Соглашайтесь на романтичные свидания, устраивайте события и сюрпризы для близких. Обретя новый смысл в жизни, все остальное нормализуется тут же.',
      ]
    }
  },
  {
    "library": {
      variant: [
        "Ожидают кардинальные изменения - встреть их с радостью - впереди только лучшее",
        "Готовься к романтическому свиданию. Начни заранее - маникюр, педикюр, спортзал.",
        "Стремительный карьерный рост ожидает в этом году."
      ],
      prediction: [
        'Год для вас будет сладким. Жизнь в шоколаде чревата тем, что можно заполучить лишний вес. Поэтому купаясь в своем счастье, не забывайте оглядываться по сторонам, чтобы вовремя скорректировать свое поведение. Излишне слащавых людей из окружения лучше убрать, чтобы они не портили гармоничную картину.',
        'Год для вас будет гармоничным. Удивительно, но наконец-то наступит момент, когда во всех сферах будет баланс. Вас устроит все, что будет происходить на работе, на личном фронте и дома. Окружающие заметят, как будут светиться по-новому ваши глаза.']
    }
  },
  {
    "dining": {
      variant: [
        "Нужно отдохнуть! Ночные перекусы - это не лучший способ) Пора выбрать новое хобби",
        "Остановись, оглянись, что ты хотел/ла всегда? Посвети больше времени себе."
      ],
      prediction: [
        'Год для вас будет удивительным. Вы уже отвыкли к тому, что судьба дарит приятные сюрпризы. Именно их она припасла на предстоящий год. Удивят даже те, кого вы, казалось, знали как свои пять пальцев. Даже от весьма авантюрных предложений в этом году лучше не отказываться.',
        'Год для вас будет ошеломительным. Успех, который обрушится на вас, денежный поток и обилие новых знакомств приведут в состояние шока. Приходите в чувство и наслаждайтесь тем, что заготовил новый год для вас.'
      ]
    }
  },
  {
    "greenhouse": {
      variant: [
        "В скором будущем — большое приобретение",
        "Удача на твоей стороне - выиграешь в лотерею в этом году.",
        "Год обещает быть теплым - в твоём доме будет всегда уютно и тепло."
      ],
      prediction: [
        'Год для вас будет наполнен общением. Если даже раньше вы не любили новые знакомства и частые встречи, в этом году это станет основой вашей жизни. Именно через общение вы обретете новых друзей, партнеров или покупателей, а также найдете новую сферу применения своей голове. Тексты новогодних предсказаний на бумажках - море позитива!',
        'Год для вас будет потрясающим. Приготовьтесь, что получаемые вами результаты, успех в делах и яркие отношения с любимыми могут стать предметом зависти. Чтобы не испытать печальных потрясений от недругов, продумайте свою защиту заранее.'
      ]
    }
  },
  {
    "restroom": {
      variant: [
        "В год Змеи будешь извиваться от счастья, шипеть от восторга.",
        "Высокая вероятность осадков в виде денежного дождя.",
        "Пора прикупить парашют – ведь ты будешь на седьмом небе от счастья."
      ]
    }
  },
  {
    "bedroom":
    {
      variant: [
        "Готовься к волшебству, особенно если будешь загадывать желания под елкой.",
        "Твои близкие приготовят тебе много сюрпризов в новом году!",
        "Если будешь весь год кушать то, что хочется, пить то, что льётся и спать, сколько нужно, то велика вероятность быть довольным весь год...."
      ]
    }
  },
  {
    "workroom":
    {
      variant: [
        "Обязательно делись радостью с друзьями",
        "Летом сможешь отдохнуть, если сейчас потрудишься.",
        "Новогодняя перезагрузка поможет расслабиться и добиваться новых целей в учебе и творчестве."
      ]
    }
  }
]

export const storyBook = {
  "begining": {
    room: 'begining',
    title: "Начало",
    description: `<p class="book__text">Сегодня 31 декабря. Вы не выспались и настроение не очень, хотя на носу такой праздник.</p>
      <p class="book__text">Всё же вы решили, как и планировали, поехать покататься на ватрушке с друзьями. По дороге на "секретное" место в лесу, лопнула шина и водитель(ваш друг, а не таксист) остановился на обочине, чтобы исправить положение. Вы тоже вышли из машины, чтобы подышать свежим воздухом, прихватив пакет с апельсинами, чтобы угостить друзей. Вокруг была суматоха: каждый пытался посоветовать что-то очень дельное, другие начали играть в снежки.
      <p class="book__text">"Ну уж нет" - подумали вы и осмотревшись вокруг увидели тропинку на снегу в лес. "Полюбуюсь зимой, а вдруг и там можно будет покаться". С этими мыслями вы отправляетесь в лес.</p>
      <p class="book__text">Уже через несколько шагов Вы видите дом, который на картинке.</p>
      <p class="book__text">"Классно оформили... Кажется пора возвращаться" - подумали вы. Но повернувшись, тропинки вы не увидели.</p>
      <p class="book__text">Единственным выходом было обратиться за помощью в этот наверняка жилой дом.</p>`,
    task: `Выберите вход в дом, которым вы воспользуетесь. А вот и первое судьбоносное решенние. Для того чтобы приступить к выполнению задания после ознакомления с его правилами - необходимо нажимать кнопку ниже. Как только задание будет выполнено - на последней страницы Книги историй читайте продолжение...`,
    ending: `У вас в руках есть апельсины (оранжевые кружочки над Книгой истории), которые вы будете тратить на прохождение заданий(ведь голод - не тётка). Чем быстрее вы будете справляться с заданиями(меньше подсказок, меньше попыток), тем больше комнат сможете посетить. Как только апельсины закончаться... - что-то произойдёт`,
    mission: `
      <div class="begining__buttons">
        <button data-room="1" class="begining__button begining__button_new">Новая игра</button>
        <button  data-room="2" class="begining__button begining__button_new">Продолжить</button>
      </div>

      <div class="begining__users">
      <ul class="begining__users-list">

      </ul>

      </div>
    `,
    result: {
      1: 'forest',
    },
    resourses: {
      1: 0,
      2: 0,
    },

    listener: beginigListener,

  },
  "forest": {
    room: 'forest',
    title: "31 декабря",
    description: `<p class="book__text">Сегодня 31 декабря. Вы не выспались и настроение не очень, хотя на носу такой праздник.</p>
      <p class="book__text">Всё же вы решили, как и планировали, поехать покататься на ватрушке с друзьями. По дороге на "секретное" место в лесу, лопнула шина и водитель(ваш друг, а не таксист) остановился на обочине, чтобы исправить положение. Вы тоже вышли из машины, чтобы подышать свежим воздухом, прихватив пакет с апельсинами, чтобы угостить друзей. Вокруг была суматоха: каждый пытался посоветовать что-то очень дельное, другие начали играть в снежки.
      <p class="book__text">"Ну уж нет" - подумали вы и осмотревшись вокруг увидели тропинку на снегу в лес. "Полюбуюсь зимой, а вдруг и там можно будет покаться". С этими мыслями вы отправляетесь в лес.</p>
      <p class="book__text">Уже через несколько шагов Вы видите дом, который на картинке.</p>
      <p class="book__text">"Классно оформили... Кажется пора возвращаться" - подумали вы. Но повернувшись, тропинки вы не увидели.</p>
      <p class="book__text">Единственным выходом было обратиться за помощью в этот наверняка жилой дом.</p>`,
    task: `Выберите вход в дом, которым вы воспользуетесь. А вот и первое судьбоносное решенние. Для того чтобы приступить к выполнению задания после ознакомления с его правилами - необходимо нажимать кнопку ниже. Как только задание будет выполнено - на последней страницы Книги историй читайте продолжение...`,
    ending: `У вас в руках есть апельсины (оранжевые кружочки над Книгой истории), которые вы будете тратить на прохождение заданий(ведь голод - не тётка). Чем быстрее вы будете справляться с заданиями(меньше подсказок, меньше попыток), тем больше комнат сможете посетить. Как только апельсины закончаться... - что-то произойдёт`,
    src: "img/forest.jpg",
    mission: `
          <div class="forest__fields">
            <input name="userName" class="forest__input"
            placeholder="Введите Ваше имя">
    <form class="forest__app-cover visually-hidden">
      <div class="forest__select-box">
        <input type="checkbox" class="forest__view-button">
        <div class="forest__select-button" >
        <div class="forest__selected-value">
          <span class="forest__value-text">Вход от трубы</span>
        </div>
      </div>

    <div class="forest__options">
      <div class="forest__option">
        <input class="forest__input-radio forest__input-radio_top" type="radio" name="Слева" value="1">
        <input class="forest__input-radio forest__input-radio_bottom" type="radio" name="Слева" value="1">
        <span class="forest__label">Слева</span>
        <span class="forest__value">Слева</span>
      </div>

      <div class="forest__option">
        <input class="forest__input-radio" type="radio" name="Справа" value="2">
        <input class="forest__input-radio" type="radio" name="Справа" value="2">
        <span class="forest__label">Справа</span>
        <span class="forest__value">Справа</span>
      </div>

      <div class="forest__bg"></div>
    </div>
  </div>
  </div>
  </form>`,
    result: {
      1: 'hall',
      2: 'kitchen',
    },
    resourses: {
      1: 0,
      2: 0,
    },
    action: getUserName,
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
    prediction: ['Год будет для вас ослепительным. От ярких событий и красок иногда захочется закрыть глаза. Наслаждайтесь тем, что принесет этот год. Внимательно смотрите по сторонам, чтобы не упустить возможность обрести свое счастье.',
      'Год для вас будет благополучным. Все поводы волноваться останутся в прошлом. Семья и близкие будут радовать, коллеги по работе помогут в новом проекте. Денежных средств будет хватать и на отдых, и на инвестиции в свое будущее.'
    ],

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
      3: 'hall',
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
    prediction: ['Год для вас будет очень доходным. К вам не только устремятся новые денежные потоки, но и поступят предложения о выгодном инвестировании. Приятными покупками станут новый автомобиль или уютная квартира.',
      'Год для вас будет наполнен страстью. Вы давно ждали, чтобы внутри порхали бабочки, и приятная теплота разносилась по телу от прикосновения близкого человека. Новый прилив чувств может полностью поглотить вас. Страсть откроется и в работе, где захочется добиться намеченных ранее целей.'
    ],

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
    prediction: [
      'Год для вас будет наполнен сюрпризами. Все они будут приятными, поэтому опасаться их не стоит. Наоборот, приготовьтесь к тому, что может потребоваться полная перезагрузка в жизни, чтобы насладиться предстоящим счастьем.',
      'Год для вас будет романтичным. Откройте свое сердце для любви и перестаньте бояться быть счастливым человеком. В ответ вы получите поток нежности, о которой так мечтали. Соглашайтесь на романтичные свидания, устраивайте события и сюрпризы для близких. Обретя новый смысл в жизни, все остальное нормализуется тут же.',
    ],

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
    prediction: [
      'Год для вас будет сладким. Жизнь в шоколаде чревата тем, что можно заполучить лишний вес. Поэтому купаясь в своем счастье, не забывайте оглядываться по сторонам, чтобы вовремя скорректировать свое поведение. Излишне слащавых людей из окружения лучше убрать, чтобы они не портили гармоничную картину.',
      'Год для вас будет гармоничным. Удивительно, но наконец-то наступит момент, когда во всех сферах будет баланс. Вас устроит все, что будет происходить на работе, на личном фронте и дома. Окружающие заметят, как будут светиться по-новому ваши глаза.'
    ],

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
    prediction: [
      'Год для вас будет удивительным. Вы уже отвыкли к тому, что судьба дарит приятные сюрпризы. Именно их она припасла на предстоящий год. Удивят даже те, кого вы, казалось, знали как свои пять пальцев. Даже от весьма авантюрных предложений в этом году лучше не отказываться.',
      'Год для вас будет ошеломительным. Успех, который обрушится на вас, денежный поток и обилие новых знакомств приведут в состояние шока. Приходите в чувство и наслаждайтесь тем, что заготовил новый год для вас.'
    ],

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
    prediction: [
      'Год для вас будет наполнен общением. Если даже раньше вы не любили новые знакомства и частые встречи, в этом году это станет основой вашей жизни. Именно через общение вы обретете новых друзей, партнеров или покупателей, а также найдете новую сферу применения своей голове. Тексты новогодних предсказаний на бумажках - море позитива!',
      'Год для вас будет потрясающим. Приготовьтесь, что получаемые вами результаты, успех в делах и яркие отношения с любимыми могут стать предметом зависти. Чтобы не испытать печальных потрясений от недругов, продумайте свою защиту заранее.'
    ],

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
    prediction: [
      'Год для вас будет необычным. Вы откроете в себе скрытые резервы, что позволит решиться на самые безумные поступки. Пришло время сделать намеченный прыжок с парашютом или поехать на сплав по реке, сказать любимому человеку о том, как хочется встретить вместе старость. Иногда будет казаться, что изменилось все вокруг. На самом деле изменились вы сами и смогли распахнуть двери своему счастью.',
      'Год для вас будет активным. Быть в тонусе вам нравится. В отличие от других ваша активность всегда имеет четкую рациональную основу. Действуйте, чтобы добиться успеха: на работе, дома, в бизнесе, в спорте. Ваша активность заразит других, что сделает год богатым на результаты.'
    ],

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
    prediction: [
      'Год для вас будет незабываемым. Про него вы не будете рассказывать внукам, но с удовольствием станете вспоминать в глубокой старости, сидя у камина. Яркие отношения, необычные встречи, новые открытия и путешествия оставят неизгладимый след в жизненной истории.',
      'Год для вас будет крутым. Переворот в жизни позволит получить доступ к новым ресурсам. Это откроет возможности для реализации намеченных планов и исполнения мечты. То, что раньше казалось недоступным, вдруг окажется в руках.'
    ],

    action: bedroomAction,
    listener: bedroomListener,
  },
  "workroom": {
    room: 'workroom',
    title: "Кабинет",
    description: `<p class="book__text">Вы зашли в просторную комнату, осмотревшись вы поняли, что это гостиная. </p>
      <p class="book__text">Праздничная елка с огоньками наполнила комнату ароматом хвои, горячий камин согревал воздух, треск дров придавал уют и расслаблял.</p>
      <p class="book__text">Вам захотелось рассмотреть ближе один из предметов комнаты.
      Вы долго, как вам показалось, осматривали вещь. захотелось не только посмотреть, но и пощупать.</p>`,
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
    prediction: [
      'Год для вас будет наполнен любовью. Быть в центре внимания, может, и непривычно, но окружающие захотят часто говорить о своих чувствах. Не бойтесь этого внимания. Любовь еще никому не вредила. Она способна преодолеть любые преграды, поэтому свои чувства тоже нет смысла скрывать.',
      'Год будет для вас спокойным. Так хочется никуда не спешить, наслаждаться общением с близкими, встречами с друзьями. Эти возможности будут в предстоящем году. Копите силы, ведь всегда море жизни после штиля радует штормом.',
      'Год для вас будет наполнен добротой. Доброе сердце позволит справиться даже с самыми изощренными кознями. Делитесь этими чувствами с другими, получайте добро в ответ. Некоторые поступки поразят вас своей бескорыстностью и изменят структуру ваших ценностей. В итоге вы сможете понять, что важнее всего для вас в этой жизни.',
    ],

    action: bullAndCowsGame,
  },
  "predictions": {
    room: 'predictions',
    title: "Предсказания",
    description: `<p class="book__text">Апельсины зкончились... Вы сели на ближайший стул и вас потянуло в сон...</p>
      <p class="book__text">Вдруг вы проснулись и на коленях обнаружили скомканную бумажку, на первый взгляд чистую. Но любопыство вас заставило развернуть и проверить на самом ли деле это так?! Ведь здесь ничего не бывает просто так</p>`,
    task: `Хорошо же её скомкали... Долго, как вам показалось, вы разворачивали листок. И он действительно оказался пустым. Почувствовалось огорчение, но ничего зато вы почувствовали запах свежего морозного воздуха - открылось окно. А вот и выход...`,
    ending: `Буквы сами начали появляться на листке - вы не поверили глазам... Голова начала кружиться и вы упали в обморок. Проснулись вы оттого, что кто-то вас толкал - это ваш друг будил вас, потому что вы приехали. "Не может быть, что всё это был сон, настолько реальный, что я чувствую... что? ... бумажку в руке с тем самым предсказанием!"`,
    src: "img/predictions.jpg",
    mission: `

      <h2 class="predictions__title">
      Здраствуй, малыш!
      </h2>
      <p class="predictions__patern">
      (по сравнению с моим возрастом для меня все люди - малыши)
      Пишет Вам Дед Мороз!</p>
          <p class="predictions__patern">
      Всю игру я наблюдал за Вами. Вы - молодец, достойно проходили испытания и ни разу не сдались! Я посмотрел Вашу натальную карту, пока Вы осматривали мой дом и вот, что
      я выяснил.
      </p>
      <p class="predictions__patern">
      Год для вас будет необычным. Вы откроете в себе скрытые резервы, что позволит решиться на самые безумные поступки. Пришло время сделать намеченный прыжок с парашютом или поехать на сплав по реке, сказать любимому человеку о том, как хочется встретить вместе старость. Иногда будет казаться, что изменилось все вокруг. На самом деле изменились вы сами и смогли распахнуть двери своему счастью.
      Но помни, не засиживайся в квартире - за твоей дверью уже стоит счастье, осталось только впустить
      </p>
          `,
    result: {
      1: 'hall',
    },
    resourses: {
      1: 0,
    },
    // action: printText,
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
