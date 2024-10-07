export const kitchenAction = () => {
  const kitchen = document.querySelector('.kitchen__container');
  const faucet = document.createElement('div');
  faucet.classList.add('kitchen__faucet');
  kitchen.append(faucet)

  const nav = document.querySelector('.kitchen__overlay');
  const link = document.querySelector('.kitchen__links');

  faucet.addEventListener('click', () => {
    nav.classList.toggle('kitchen__overlay_open');
    link.classList.toggle('kitchen__links_fade-in');
  })
}
