import getDataReturn from '../utils/gameDataReturn.js';
import startGame from '../startGame.js';
import getRandNum from '../utils/getRandNum.js';

const primeGame = () => {
  const isPrime = (num) => {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i += 1) {
      if (num % i === 0) return false;
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
