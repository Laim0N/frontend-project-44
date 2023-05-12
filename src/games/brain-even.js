#!/usr/bin/env node
/* eslint-disable no-console */
import playGame from '../index.js';
import getRandomInt from '../random-generator.js';

const isEven = (number) => number % 2 === 0;
const evenGame = () => {
  const questionsAndAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomInt(1, 100);
    const correctAnswer = isEven(num) ? 'yes' : 'no';
    const question = `Question: ${num}`;
    questionsAndAnswers.push([question, correctAnswer]);
  }
  questionsAndAnswers.push('Answer "yes" if the number is even, otherwise answer "no".');
  playGame(questionsAndAnswers);
};

export default evenGame;
