import playGame from '../index.js';
import getRandomInt from '../random-generator.js';

const isEven = (number) => number % 2 === 0;
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const randomNumber = getRandomInt(1, 100);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  const question = `${randomNumber}`;
  return [question, correctAnswer];
};
export default () => {
  playGame(description, getQuestionAndAnswer);
};
