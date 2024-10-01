import { shuffle } from "./dining.js";

const getRandomNumber = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min;
}


export const gamePlant = (arr) => {
  const randomNumber = getRandomNumber(0, arr.length);
  const word = arr[randomNumber];
  const wordSymbol = Array.from(word);
  const wordShufled = shuffle(wordSymbol);
  console.log(wordShufled);


}
