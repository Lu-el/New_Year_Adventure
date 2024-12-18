export const turnLight = () => {
  let countClick = 0;
  const toggleNumber = Math.floor(Math.random() * 16);
  const light = document.querySelector('.storeroom__overlay');
  const squares = document.querySelectorAll('.storeroom__square');
  light.addEventListener('click', (e) => {
    const target = e.target;
    countClick = countClick + 1
    Array.from(squares).forEach((square, index, array) => {
      if (target == square) {
        square.style.border = 'none';
        if (toggleNumber == index) {
          light.classList.add('storeroom__overlay_close');
          light.classList.add('visually-hidden');
          const result = (countClick % 3 === 0) ? countClick : ((Math.floor(countClick / 3) + 1)*3)
          light.dataset.countClick = result;
        }
      }
    })
  })
}

