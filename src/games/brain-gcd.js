import getRandomInt from '../random-generator.js';
import playGame from '../index.js';
const gcd = (num1, num2) => {
  let a = Math.abs(num1);
  let b = Math.abs(num2);
  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }
  return a;
};
const description = 'Find the greatest common divisor of given numbers.';
const getQuestionAndAnswer = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const question = `Question: ${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2);

  return [question, correctAnswer.toString()];
};
export default () => {
  playGame(description, getQuestionAndAnswer);
};
