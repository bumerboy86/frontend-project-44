#!/usr/bin/env node

const askQuestion = require('../src/cli');

console.log('Welcome to the Brain Games!');

const userName = askQuestion('May I have your name?: ');

console.log(`Hello, ${userName}!`);

const step = 3;
let finish = false;

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

for (let i = 0; i < step; i += 1) {
  const randomtNum = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = isPrime(randomtNum) ? 'yes' : 'no';
  console.log(`Question: ${randomtNum}`);
  const isPrimeAnswer = askQuestion('Your answer: ');
  if (correctAnswer === isPrimeAnswer) {
    console.log('Correct!');
    finish = true;
  } else {
    console.log(
      `'${isPrimeAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`,
    );
    finish = false;
    break;
  }
}
if (finish) {
  console.log(`Congratulations, ${userName}!`);
}
