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
          light.style.display = 'none';
          // array.forEach(elem => elem.style.border = 'none');
        }
        console.log(`${toggleNumber} ${index} ${countClick}`);
      }
    })
  })
}

