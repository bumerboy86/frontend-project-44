#!/usr/bin/env node

const askQuestion = require('../src/cli');

console.log('Welcome to the Brain Games!');

const userName = askQuestion('May I have your name?: ');

console.log(`Hello, ${userName}!`);
