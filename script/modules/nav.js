export const navAction = () => {
  const menuBtn = document.querySelector('.kitchen');
  const nav = document.querySelector('.kitchen__nav');
  // const lineOne = document.querySelector('nav .menu-btn .line--1');
  // const lineTwo = document.querySelector('nav .menu-btn .line--2');
  // const lineThree = document.querySelector('nav .menu-btn .line--3');
  const link = document.querySelector('.kitchen__links');
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('kitchen__nav_open');
    // lineOne.classList.toggle('line-cross');
    // lineTwo.classList.toggle('line-fade-out');
    // lineThree.classList.toggle('line-cross');
    link.classList.toggle('kitchen__links_fade-in');
  })
}
