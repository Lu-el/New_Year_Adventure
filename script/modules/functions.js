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
