import { playGame, getRandomInt } from '../index.js';

const gcd = (num1, num2) => {
  let a = Math.abs(num1);
  let b = Math.abs(num2);
  if (a === 0) {
    return b;
  }
  if (b === 0) {
    return a;
  }
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};

const brainGcd = () => {
  const questionsAndAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomInt(1, 100);
    const num2 = getRandomInt(1, 100);
    const question = `Question: ${num1} ${num2}`;
    const correctAnswer = gcd(num1, num2);
    questionsAndAnswers.push([question, correctAnswer.toString()]);
  }
  questionsAndAnswers.push('Find the greatest common divisor of given numbers.');
  playGame(questionsAndAnswers);
};
export default brainGcd;
