import startGame from '../startGame.js';
import gameDataReturn from '../utils/gameDataReturn.js';
import getRandNum from '../utils/getRandNum.js';

const progressionGame = () => {
  const step = getRandNum(5, 10);
  const hidenNumber = getRandNum(1, step);
  const progressionSteps = getRandNum(1, 10);
  let startNumber = getRandNum(1, 100);

  const progressionArr = [];
  let correctAnswer = 0;

  for (let i = 0; i < step; i += 1) {
    if (i === hidenNumber) {
      correctAnswer = startNumber;
      progressionArr.push('..');
    } else {
      progressionArr.push(startNumber);
    }
    const nexNum = startNumber + progressionSteps;
    startNumber = nexNum;
  }

  return gameDataReturn(
    'What number is missing in the progression?',
    progressionArr.join(' '),
    String(correctAnswer),
  );
};

export default () => startGame(progressionGame);
