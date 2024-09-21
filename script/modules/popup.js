export const popupAction = () => {
  const popupBg = document.querySelector('.popup'); // Фон попап окна
  const popupContain = document.querySelector('.popup__container'); // Само окно
  const openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
  // const closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна

  openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
      e.preventDefault(); // Предотвращаем дефолтное поведение браузера
      popupBg.classList.add('popup_active'); // Добавляем класс 'active' для фона
      popupContain.classList.add('popup__container_active'); // И для самого окна
    })
  });

  // closePopupButton.addEventListener('click', () => { // Вешаем обработчик на крестик
  //   popupBg.classList.remove('popup_active'); // Убираем активный класс с фона
  //   popupContain.classList.remove('popup__container_active'); // И с окна
  // });

  document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if (e.target === popupBg) { // Если цель клика - фот, то:
      popupBg.classList.remove('popup_active'); // Убираем активный класс с фона
      popupContain.classList.remove('popup__container_active'); // И с окна
    }
  });
}
