export const getContainer = (classname) => {
  const container = document.createElement('div');
  container.classList.add('container', `${classname}__container`);
  return container;
}

export const getSection = (classname) => {
  const section = document.createElement('section');
  section.classList.add(classname);
  return section;
}

export const shuffle = (deck) =>  {
  for (let j, x, i = deck.length; i; j = Math.floor(Math.random() * i), x = deck[--i], deck[i] = deck[j], deck[j] = x);
  return deck;
}
