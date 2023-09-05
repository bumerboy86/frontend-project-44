import getDataReturn from '../utils/gameDataReturn.js';
import startGame from '../startGame.js';
import getRandNum from '../utils/getRandNum.js';

const primeGame = () => {
  const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  };
  const randomtNum = getRandNum(1, 100);
  const correctAnswer = isPrime(randomtNum) ? 'yes' : 'no';
  return getDataReturn(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    randomtNum,
    correctAnswer,
  );
};

export default () => startGame(primeGame);
