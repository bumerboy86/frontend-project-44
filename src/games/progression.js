import startGame from '../startGame.js';
import { getRandNum } from '../utils.js';

const createProgression = (
  step,
  hidenNumber,
  progressionSteps,
  startNumber,
) => {
  const progressionItems = [];
  let correctAnswer = 0;
  let progressionNumber = startNumber;

  for (let i = 0; i < step; i += 1) {
    if (i === hidenNumber) {
      correctAnswer = progressionNumber;
      progressionItems.push('..');
    } else {
      progressionItems.push(progressionNumber);
    }
    const nexNum = progressionNumber + progressionSteps;
    progressionNumber = nexNum;
  }

  return [progressionItems, correctAnswer];
};

const progressionGame = () => {
  const step = getRandNum(5, 10);
  const hidenNumber = getRandNum(1, step);
  const progressionSteps = getRandNum(1, 10);
  const startNumber = getRandNum(1, 100);

  const generatedData = createProgression(
    step,
    hidenNumber,
    progressionSteps,
    startNumber,
  );

  const [progressionItems, correctAnswer] = generatedData;

  return {
    questionText: 'What number is missing in the progression?',
    generatedValue: progressionItems.join(' '),
    answer: String(correctAnswer),
  };
};

export default () => startGame(progressionGame);
