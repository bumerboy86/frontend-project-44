import startGame from '../startGame.js';
import { getRandNum } from '../utils.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const primeGame = () => {
  const randomtNum = getRandNum(1, 100);
  const correctAnswer = isPrime(randomtNum);

  return {
    questionText:
      'Answer "yes" if given number is prime. Otherwise answer "no".',
    generatedValue: randomtNum,
    answer: correctAnswer ? 'yes' : 'no',
  };
};

export default () => startGame(primeGame);
