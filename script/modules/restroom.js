export const openDoor = () => {
  const restroom = document.querySelector('.restroom__overlay');
  const perspectives = restroom.querySelectorAll('.restroom__border');
  const thumbs = restroom.querySelectorAll('.restroom__door');

  perspectives.forEach(element => {
    element.addEventListener('click', () => {
      const thumb = element.querySelector('.restroom__door');

      if (thumb.classList.contains('restroom__door_opened')) {
        thumb.classList.remove("restroom__door_opened");
      } else {
        thumbs.forEach(element => {
          element.classList.remove('restroom__door_opened')
        });
        thumb.classList.add('restroom__door_opened')
      }
    })
  })

}
