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

export const countSameRoom = (rooms, room) => {
  let count = 0;
  for (let i = 0; i < rooms.length; i +=1 ) {
    if (rooms[i] === room) {
      count += 1;
    }
  }
  if (count === 2) {
    return true;
  }
  return false;
}

export const randomElement = (arr, current, next) => {
  const shuffled = shuffle(arr);
  for (let i = 0; i < shuffled.length; i +=1 ) {
    if (shuffled[i] != current && shuffled[i] != next) {
      console.log(shuffled[i]);
      return shuffled[i];
    }
  }
}
