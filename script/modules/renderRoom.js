import { getContainer, getSection } from "./functions.js";

export const renderRoom = (room) => {
  const roomSection = getSection(room.room);
  roomSection.dataset.room = room.room;
  const roomContainer = getContainer(room.room);
  roomSection.append(roomContainer);

  const roomOverlay = document.createElement('div');
  roomOverlay.classList.add('room');

  const roomImg = document.createElement('img');
  roomImg.classList.add('room__img');
  roomImg.src = room.src;
  roomImg.alt = room.title;
  roomOverlay.append(roomImg);

  roomContainer.append(roomOverlay);

  return roomSection;
}


