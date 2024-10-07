export const bookStyle = () => {
  const pages = document.getElementsByClassName('book__page');
  for (let i = 0; i < pages.length; i++) {
    let page = pages[i];
    if (i % 2 === 0) {
      page.style.zIndex = (pages.length - i);
    }
  }

  for (let i = 0; i < pages.length; i++) {
    pages[i].pageNum = i + 1;
  }

  for (let page of pages) {
    page.addEventListener('click', (e) => {
      const target = e.target;
      if (!target.classList.contains('book__btn')) {
        if (page.pageNum % 2 === 0) {
          page.classList.remove('book__page_flipped');
          page.previousElementSibling.classList.remove('book__page_flipped');
        }
        else {
          page.classList.add('book__page_flipped');
          page.nextElementSibling.classList.add('book__page_flipped');
        }
      }
    })
  }
}
