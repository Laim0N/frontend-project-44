#!/usr/bin/env node
/* eslint-disable no-console */
import getRandomInt from '../random-generator.js';

const isEven = (number) => number % 2 === 0;

const evenGame = () => {
  const questionsAndAnswers = [];
  const num = getRandomInt(1, 100);
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  const question = `Question: ${num}`;
  questionsAndAnswers.push(question, correctAnswer);
  return questionsAndAnswers;
};

export default evenGame;
