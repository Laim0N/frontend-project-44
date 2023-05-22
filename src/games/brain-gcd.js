import getRandomInt from '../random-generator.js';
import playGame from '../index.js';

const gcd = (randomNumber1, randomNumber2) => {
  let a = Math.abs(randomNumber1);
  let b = Math.abs(randomNumber2);
  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }
  return a;
};
const description = 'Find the greatest common divisor of given numbers.';
const getQuestionAndAnswer = () => {
  const randomNumber1 = getRandomInt(1, 100);
  const randomNumber2 = getRandomInt(1, 100);
  const question = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = gcd(randomNumber1, randomNumber2);

  return [question, correctAnswer.toString()];
};
export default () => {
  playGame(description, getQuestionAndAnswer);
};
