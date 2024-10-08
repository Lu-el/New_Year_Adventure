import { shuffle } from "./functions.js";
import { storyBook } from "./objects.js";
import { getEndPage } from "./renderStory.js";


const quizData = [
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

const deselectAnswers = (answerElements) => {
  answerElements.forEach(answer => answer.checked = false);
};

const getSelected = (answerElements) => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};

const loadQuiz = (quizDataShuffle, answerElements, questionElement, a_text, b_text, c_text, d_text, currentQuiz) => {
  deselectAnswers(answerElements);
  const currentQuizData = quizDataShuffle[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};

const libraryAction = (quizDataShuffle, quizLibrary, submitButton, answerElements, questionElement, a_text, b_text, c_text, d_text, currentQuiz, score) => {
  const room = storyBook.library;
  loadQuiz(quizDataShuffle, answerElements, questionElement, a_text, b_text, c_text, d_text, currentQuiz);
  submitButton.addEventListener("click", () => {
    const answer = getSelected(answerElements);
    if (answer) {
      if (answer === quizDataShuffle[currentQuiz].correct) score++;
      currentQuiz++;
      if (currentQuiz < quizDataShuffle.length) loadQuiz(quizDataShuffle, answerElements, questionElement, a_text, b_text, c_text, d_text, currentQuiz);
      else {
        quizLibrary.innerHTML = `
          <h2 class="library__question">Вы ответили на ${score}/${quizDataShuffle.length} правильно</h2>
                ` // location.reload() won't work in CodePen for security reasons;
        const resultNumber = (score % 3 === 0) ? score : ((Math.floor(score / 3) + 1) * 3);

        getEndPage(room, resultNumber)
      }
    }
  });
}

export const libraryListener = () => {
  const quizLibrary = document.querySelector(".library__overlay");
  const submitButton = quizLibrary.querySelector(".library__btn");
  const answerElements = quizLibrary.querySelectorAll(".library__answer");
  const questionElement = quizLibrary.querySelector(".library__question");
  const a_text = quizLibrary.querySelector(".library__label_a");
  const b_text = quizLibrary.querySelector(".library__label_b");
  const c_text = quizLibrary.querySelector(".library__label_c");
  const d_text = quizLibrary.querySelector(".library__label_d");


  let currentQuiz = 0;
  let score = 0;

  const quizDataShuffle = shuffle(quizData).slice(0, 9);

  libraryAction(quizDataShuffle, quizLibrary, submitButton, answerElements, questionElement, a_text, b_text, c_text, d_text, currentQuiz, score);
}

