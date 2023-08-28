#!/usr/bin/env node

const askQuestion = require('../src/cli');
const isEvenGame = require('./brain-even');

console.log('Welcome to the Brain Games!');

const userName = askQuestion('May I have your name?: ');

console.log(`Hello, ${userName}!`);

isEvenGame(userName);
