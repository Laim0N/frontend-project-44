import playGame from '../index.js';
import getRandomInt from '../random-generator.js';

const isEven = (number) => number % 2 === 0;
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const num = getRandomInt(1, 100);
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  const question = `Question: ${num}`;
  return [question, correctAnswer];
};
export default () => {
  playGame(description, getQuestionAndAnswer);
};
