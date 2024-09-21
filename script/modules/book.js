export const bookStyle = () => {
  const pages = document.getElementsByClassName('book__page');
  for (let i = 0; i < pages.length; i++) {
    let page = pages[i];
    if (i % 2 === 0) {
      page.style.zIndex = (pages.length - i);
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    for (var i = 0; i < pages.length; i++) {
      //Or var page = pages[i];
      pages[i].pageNum = i + 1;
      pages[i].onclick = function () {
        if (this.pageNum % 2 === 0) {
          this.classList.remove('book__page_flipped');
          this.previousElementSibling.classList.remove('book__page_flipped');
        }
        else {
          this.classList.add('book__page_flipped');
          this.nextElementSibling.classList.add('book__page_flipped');
        }
      }
    }
  })
}
