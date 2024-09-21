import {rollTheDice} from './script/modules/dice.js';
import { navAction } from './script/modules/nav.js';
import { popupAction } from './script/modules/popup.js';
import { bookStyle} from './script/modules/book.js';

navAction();
popupAction();
bookStyle();
// buttom__roll
// buttom__name

const buttonRoll = document.querySelector('.dice__buuton_roll');
buttonRoll.addEventListener('click', rollTheDice);

// const buttonName = document.querySelector('.buttom__name');
// buttonName.addEventListener('click', editNames);
