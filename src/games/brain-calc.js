import playGame from '../index.js';
import getRandomInt from '../random-generator.js';

const operators = ['+', '-', '*'];
const randomOperator = () => operators[getRandomInt(0, 2)];
const description = 'What is the result of the expression?';

const correctAnswerCalculation = (randomOperand1, operator, randomOperand2) => {
  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = randomOperand1 + randomOperand2;
      break;
    case '-':
      correctAnswer = randomOperand1 - randomOperand2;
      break;
    case '*':
      correctAnswer = randomOperand1 * randomOperand2;
      break;
    default:
      console.log('Error!');
  }
  return correctAnswer;
};

const getQuestionAndAnswer = () => {
  const randomOperand1 = getRandomInt(1, 20);
  const randomOperand2 = getRandomInt(1, 20);
  const operator = randomOperator();
  const correctAnswer = correctAnswerCalculation(randomOperand1, operator, randomOperand2);
  const question = `${randomOperand1} ${operator} ${randomOperand2}`;
  return [question, correctAnswer.toString()];
};
export default () => {
  playGame(description, getQuestionAndAnswer);
};
