import { shuffle } from "./functions.js";
import { quizData, storyBook } from "./objects.js";
import { getEndPage } from "./renderStory.js";

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

const watchCorrect = (quizDataShuffle, currentQuiz, answerElements, timer) => {
  const correctAnswer = quizDataShuffle[currentQuiz].correct;
  answerElements.forEach(el => {
    if (el.id === correctAnswer) {
      el.closest('.library__item').style.color = 'green';
      setTimeout(() => {
        el.closest('.library__item').style.color = '';
      }, timer)
    }
  })
}

const libraryAction = (quizDataShuffle, quizLibrary, submitButton, answerElements, questionElement, a_text, b_text, c_text, d_text, currentQuiz, score, user) => {
  const room = storyBook.library;
  const timer = 2000;
  loadQuiz(quizDataShuffle, answerElements, questionElement, a_text, b_text, c_text, d_text, currentQuiz);
  submitButton.addEventListener("click", () => {
    const answer = getSelected(answerElements);
    if (answer) {
      if (answer === quizDataShuffle[currentQuiz].correct) score++;
      watchCorrect(quizDataShuffle, currentQuiz, answerElements, timer);
      currentQuiz++;
      if (currentQuiz < quizDataShuffle.length) {
        setTimeout(() => {
          loadQuiz(quizDataShuffle, answerElements, questionElement, a_text, b_text, c_text, d_text, currentQuiz)
        }, timer)
      }
      else {
        setTimeout(() => {
          quizLibrary.innerHTML = `
          <h2 class="library__question">Вы ответили на ${score}/${quizDataShuffle.length} правильно</h2>
          `
        }, timer)

        const resultNumber = (score % 3 === 0) ? score : ((Math.floor(score / 3) + 1) * 3);
        getEndPage(room, resultNumber, user)
      }
    }
  });
}

export const libraryListener = (overlay, room, user) => {
  const quizLibrary = document.querySelector(".library__overlay");
  const submitButton = overlay.querySelector(".library__btn");
  const answerElements = overlay.querySelectorAll(".library__answer");
  const questionElement = overlay.querySelector(".library__question");
  const a_text = overlay.querySelector(".library__label_a");
  const b_text = overlay.querySelector(".library__label_b");
  const c_text = overlay.querySelector(".library__label_c");
  const d_text = overlay.querySelector(".library__label_d");


  let currentQuiz = 0;
  let score = 0;

  const quizDataShuffle = shuffle(quizData).slice(0, 9);

  libraryAction(quizDataShuffle, quizLibrary, submitButton, answerElements, questionElement, a_text, b_text, c_text, d_text, currentQuiz, score, user);
}

