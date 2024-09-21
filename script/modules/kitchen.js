export const navAction = () => {
  const menuBtn = document.querySelector('.kitchen');
  const nav = document.querySelector('.kitchen__nav');
  const link = document.querySelector('.kitchen__links');
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('kitchen__nav_open');
    link.classList.toggle('kitchen__links_fade-in');
  })
}
