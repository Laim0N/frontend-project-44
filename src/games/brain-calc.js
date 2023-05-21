import playGame from '../index.js';
import getRandomInt from '../random-generator.js';

const operators = ['+', '-', '*'];
const randomOperator = () => operators[Math.floor(Math.random() * operators.length)];
const description = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const num1 = getRandomInt(1, 20);
  const num2 = getRandomInt(1, 20);
  const operator = randomOperator();
  const question = `Question: ${num1} ${operator} ${num2}`;
  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      console.log(`Unknow operator: ${operator}`);
  }
  return [question, correctAnswer.toString()];
};
export default () => {
  playGame(description, getQuestionAndAnswer);
};
