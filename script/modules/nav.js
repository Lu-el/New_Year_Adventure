export const navAction = () => {
  const menuBtn = document.querySelector('.kitchen');
  const nav = document.querySelector('nav');
  const lineOne = document.querySelector('nav .menu-btn .line--1');
  const lineTwo = document.querySelector('nav .menu-btn .line--2');
  const lineThree = document.querySelector('nav .menu-btn .line--3');
  const link = document.querySelector('.nav-links');
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    // lineOne.classList.toggle('line-cross');
    // lineTwo.classList.toggle('line-fade-out');
    // lineThree.classList.toggle('line-cross');
    link.classList.toggle('fade-in');
  })
}
