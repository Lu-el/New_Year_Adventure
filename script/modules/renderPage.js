import { getContainer } from "./functions.js";

export const renderResourses = (resourses, listResourses = document.querySelector('.header__list')) => {
  listResourses.innerHTML = '';

  let i = 1;
  while (i <= resourses) {
    const item = document.createElement('li');
    item.classList.add('header__item');
    listResourses.append(item);
    i++;
  }

}


export const renderHead = (resourses) => {
  const header = document.createElement('header');
  header.classList.add('header');
  const container = getContainer('header');
  header.append(container);

  const title = document.createElement('h1');
  title.classList.add('header__title');
  title.innerHTML = 'эдвен"Чур меня"';
  container.append(title);

  const list = document.createElement('ul');
  list.classList.add('header__list');

  container.append(list);

  renderResourses(resourses, list);

  return header;
}

export const renderFooter = () => {
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  const container = getContainer('footer');
  footer.append(container);

  const content = `
<div class="footer__creator">
        Гривенева Любовь
      </div>

      <div class="footer__social">
        <a href="https://vk.com/id21265231" class="footer__link">
          <svg xmlns="http://www.w3.org/2000/svg" aria-label="VK" role="img" viewBox="0 0 512 512">
            <rect width="512" height="512" rx="15%" fill="#5281b8" />
            <path fill="#ffffff"
              d="M274 363c5-1 14-3 14-15 0 0-1-30 13-34s32 29 51 42c14 9 25 8 25 8l51-1s26-2 14-23c-1-2-9-15-39-42-31-30-26-25 11-76 23-31 33-50 30-57-4-7-20-6-20-6h-57c-6 0-9 1-12 6 0 0-9 25-21 45-25 43-35 45-40 42-9-5-7-24-7-37 0-45 7-61-13-65-13-2-59-4-73 3-7 4-11 11-8 12 3 0 12 1 17 7 8 13 9 75-2 81-15 11-53-62-62-86-2-6-5-7-12-9H79c-6 0-15 1-11 13 27 56 83 193 184 192z" />
          </svg>
        </a>



        <a href="https://wa.me/79053220407" class="footer__link">
          <svg width="800px" height="800px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">

            <title>Whatsapp-color</title>
            <desc>Created with Sketch.</desc>
            <defs>

            </defs>
            <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Color-" transform="translate(-700.000000, -360.000000)" fill="#67C15E">
                <path
                  d="M723.993033,360 C710.762252,360 700,370.765287 700,383.999801 C700,389.248451 701.692661,394.116025 704.570026,398.066947 L701.579605,406.983798 L710.804449,404.035539 C714.598605,406.546975 719.126434,408 724.006967,408 C737.237748,408 748,397.234315 748,384.000199 C748,370.765685 737.237748,360.000398 724.006967,360.000398 L723.993033,360.000398 L723.993033,360 Z M717.29285,372.190836 C716.827488,371.07628 716.474784,371.034071 715.769774,371.005401 C715.529728,370.991464 715.262214,370.977527 714.96564,370.977527 C714.04845,370.977527 713.089462,371.245514 712.511043,371.838033 C711.806033,372.557577 710.056843,374.23638 710.056843,377.679202 C710.056843,381.122023 712.567571,384.451756 712.905944,384.917648 C713.258648,385.382743 717.800808,392.55031 724.853297,395.471492 C730.368379,397.757149 732.00491,397.545307 733.260074,397.27732 C735.093658,396.882308 737.393002,395.527239 737.971421,393.891043 C738.54984,392.25405 738.54984,390.857171 738.380255,390.560912 C738.211068,390.264652 737.745308,390.095816 737.040298,389.742615 C736.335288,389.389811 732.90737,387.696673 732.25849,387.470894 C731.623543,387.231179 731.017259,387.315995 730.537963,387.99333 C729.860819,388.938653 729.198006,389.89831 728.661785,390.476494 C728.238619,390.928051 727.547144,390.984595 726.969123,390.744481 C726.193254,390.420348 724.021298,389.657798 721.340985,387.273388 C719.267356,385.42535 717.856938,383.125756 717.448104,382.434484 C717.038871,381.729275 717.405907,381.319529 717.729948,380.938852 C718.082653,380.501232 718.421026,380.191036 718.77373,379.781688 C719.126434,379.372738 719.323884,379.160897 719.549599,378.681068 C719.789645,378.215575 719.62006,377.735746 719.450874,377.382942 C719.281687,377.030139 717.871269,373.587317 717.29285,372.190836 Z"
                  id="Whatsapp">

                </path>
              </g>
            </g>
          </svg>
        </a>

        <a href="tel:+79378110225" class="footer__link">
          <svg height="800px" width="800px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve">
            <style type="text/css">
              .st0 {
                fill: white;
              }
            </style>
            <g>
              <path class="st0" d="M94.811,21.696c-35.18,22.816-42.091,94.135-28.809,152.262c10.344,45.266,32.336,105.987,69.42,163.165
		c34.886,53.79,83.557,102.022,120.669,129.928c47.657,35.832,115.594,58.608,150.774,35.792
		c17.789-11.537,44.218-43.058,45.424-48.714c0,0-15.498-23.896-18.899-29.14l-51.972-80.135
		c-3.862-5.955-28.082-0.512-40.386,6.457c-16.597,9.404-31.882,34.636-31.882,34.636c-11.38,6.575-20.912,0.024-40.828-9.142
		c-24.477-11.262-51.997-46.254-73.9-77.947c-20.005-32.923-40.732-72.322-41.032-99.264c-0.247-21.922-2.341-33.296,8.304-41.006
		c0,0,29.272-3.666,44.627-14.984c11.381-8.392,26.228-28.286,22.366-34.242l-51.972-80.134c-3.401-5.244-18.899-29.14-18.899-29.14
		C152.159-1.117,112.6,10.159,94.811,21.696z" />
            </g>
          </svg>
        </a>
      </div>

      <div class="footer__rights">© 2024 all rights reserved</div>

`
  container.innerHTML = content;

  return footer;
}

export const renderMain = () => {
  const main = document.createElement('main');
  main.classList.add('main');

  return main;
}

export const renderBegining = (container) => {
  let keys = Object.keys(localStorage);
  console.log(keys);

  for (let key of keys) {
    const userLi = document.createElement('li');
    userLi.classList.add('begining__item');

    const labelRadio = document.createElement('label');
    labelRadio.classList.add('begining__user-label');

    const inputRadio = document.createElement('input');
    inputRadio.classList.add('begining__user-radio');
    inputRadio.type = "radio";
    inputRadio.value = key;
    inputRadio.name = 'users';

    labelRadio.append(inputRadio);
    labelRadio.insertAdjacentHTML('beforeend', `${key}`);

    userLi.append(labelRadio);
    container.append(userLi);
  }
}


