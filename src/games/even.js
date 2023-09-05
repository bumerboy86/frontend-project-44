import startGame from '../startGame.js';
import gameDataReturn from '../utils/gameDataReturn.js';
import getRandNum from '../utils/getRandNum.js';

const isEvenGame = () => {
  const isEven = (number) => number % 2 === 0;
  const randomNumber = getRandNum(1, 100);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return gameDataReturn(
    'Answer "yes" if the number is even, otherwise answer "no".',
    randomNumber,
    correctAnswer,
  );
};

export default () => startGame(isEvenGame);
