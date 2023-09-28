import startGame from '../startGame.js';
import { getRandNum } from '../utils.js';

const isEven = (number) => number % 2 === 0;

const isEvenGame = () => {
  const randomNumber = getRandNum(1, 100);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return {
    questionText: 'Answer "yes" if the number is even, otherwise answer "no".',
    generatedValue: randomNumber,
    answer: correctAnswer,
  };
};

export default () => startGame(isEvenGame);
