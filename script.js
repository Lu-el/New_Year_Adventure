import {rollTheDice} from './script/modules/dice.js';
import { navAction } from './script/modules/kitchen.js';
import { popupAction } from './script/modules/popup.js';
import { bookStyle} from './script/modules/book.js';
import { turnLight } from './script/modules/storeroom.js';
import { libraryAction } from './script/modules/library.js';
import { diningGameAction } from './script/modules/dining.js';
import { wordMess } from './script/modules/objects.js';
import { gamePlant } from './script/modules/greenhouse.js';
import { openDoor } from './script/modules/restroom.js';
import { bullAndCowsGame } from './script/modules/workroom.js';

navAction();
popupAction();
bookStyle();
turnLight();
libraryAction();
diningGameAction();
gamePlant(wordMess);
openDoor();
bullAndCowsGame();


// buttom__roll
// buttom__name

const buttonRoll = document.querySelector('.dice__buuton_roll');
buttonRoll.addEventListener('click', rollTheDice);

// const buttonName = document.querySelector('.buttom__name');
// buttonName.addEventListener('click', editNames);
