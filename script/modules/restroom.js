export const openDoor = () => {
  const restroom = document.querySelector('.restroom__doors');
  const perspectives = document.querySelectorAll('.perspective');
  const thumbs = document.querySelectorAll('.thumb');

  perspectives.forEach(element => {
    element.addEventListener('click', () => {
      const thumb = element.querySelector('.thumb');

      if (thumb.classList.contains('thumbOpened')) {
        thumb.classList.remove("thumbOpened");
      } else {
        thumbs.forEach(element => {
          element.classList.remove('thumbOpened')
        });
        thumb.classList.add('thumbOpened')
      }

    })
  })

}
