export default (userAnswer, cpuAnswer, userName) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${cpuAnswer}'.
  Let's try again, ${userName}!`);
  return false;
};
