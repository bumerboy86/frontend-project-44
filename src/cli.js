const readlineSync = require('readline-sync');

const askQuestion = (question) => {
  const answer = readlineSync.question(question);
  return answer;
};

module.exports = askQuestion;
