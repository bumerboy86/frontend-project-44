/**
* @param {String} question
* @param {() => string} fn
 */
import askQuestion from './cli.js';
import congratulation from './congratulation.js';
import correctAnswer from './correctAnswer.js';
import getQuestion from './getQuestion.js';
import getUserAnswer from './getUserAnswer.js';
import mainQuestion from './mainQuestion.js';
import wrongAnswer from './wrong-Answer.js';

export default (fn) => {
  const userName = askQuestion();
  const rounds = 3;
  let finish = false;
  mainQuestion(fn().questionText);
  for (let i = 0; i < rounds; i += 1) {
    const generatedQuestion = fn();
    getQuestion(generatedQuestion.generatedValue);
    const userAnswer = getUserAnswer();
    if (userAnswer === generatedQuestion.answer) {
      finish = correctAnswer();
    } else {
      finish = wrongAnswer(userAnswer, generatedQuestion.answer, userName);
      break;
    }
  }
  if (finish) {
    congratulation(userName);
  }
};
