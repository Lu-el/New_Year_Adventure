// Player name
// var player1 = "Player 1";
// var player2 = "Player 2";

// Function to change the player name
// export const editNames = () => {
//   player1 = prompt("Change Player1 name");
//   player2 = prompt("Change player2 name");

//   document.querySelector("p.Player1")
//     .innerHTML = player1;

//   document.querySelector("p.Player2")
//     .innerHTML = player2;
// }

// Function to roll the dice

const setFaceUrl = (title) => {
  return `./img/dice/dice${title}.png`;
}

const diceResource = [
  {
    title: 'Время',
    faceUrl: './img/dice/dice1.svg',
  },
  {
    title: 'Удача',
    faceUrl: './img/dice/dice2.svg',
  },
  {
    title: 'Ловкость',
    faceUrl: './img/dice/dice3.svg',
  }
];

const diceNumber = [
  {
    title: 1,
  },
  {
    title: 2,
  },
  {
    title: 3,
  },
  {
    title: 4,
  },
  {
    title: 5,
  },
  {
    title: 6,
  }
];

const setDiceNumber = (a, ...b) => {
  const diceNumber = [];
  diceNumber.push({

  })
  return diceNumber;
}
// сделать ввод - это массив данных, где можно менять кол-во граней на кубике
// функцией фо ич перевбрать массив и создать новый массив из

export const rollTheDice = (e) => {
  const target = e.target;
  if (target.closest('.dice__buuton_roll')) {
    const button = target.closest('.dice__buuton_roll');
    const randomResoures = Math.floor(Math.random() * 3);
    const randomCount = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".dice__img_resource").setAttribute("src",
      diceResource[randomResoures].faceUrl);

    document.querySelector(".dice__img_count").setAttribute("src",
      setFaceUrl(randomCount));

      button.classList.remove('dice__buuton_roll');
      button.classList.add('visually-hidden');

  } else {
    const button = target.closest('.dice__buuton');
    button.classList.add('dice__buuton_roll');
    button.classList.remove('visually-hidden');
  }

}
