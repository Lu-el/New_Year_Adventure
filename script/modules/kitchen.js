export const kitchenAction = () => {
  const menuBtn = document.querySelector('.kitchen');
  const nav = document.querySelector('.kitchen__overlay');
  const link = document.querySelector('.kitchen__links');
  console.log(link);

  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('kitchen__overlay_open');
    link.classList.toggle('kitchen__links_fade-in');
  })
}
