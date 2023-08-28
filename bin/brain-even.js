const askQuestion = require('../src/cli');

const isEvenGame = (name) => {
  const userName = name;
  const isEven = (number) => number % 2 === 0;
  let step = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (true) {
    let sicretNumber = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = isEven(sicretNumber) ? 'yes' : 'no';
    const question = askQuestion(`Question: ${sicretNumber} `);
    console.log(question);
    if (correctAnswer === question) {
      step += 1;
      sicretNumber = Math.floor(Math.random() * 100) + 1;
    } else {
      return console.log(
        `'${question}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`,
      );
    }
    if (step === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
  }
};

module.exports = isEvenGame;
