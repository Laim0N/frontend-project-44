import playGame from '../index.js';
import getRandomInt from '../random-generator.js';

const progressionGeneration = (startInt, progressionStep, stepCount) => {
  const progression = [];
  let step = startInt;
  progression.push(startInt);
  for (let i = 0; i < stepCount; i += 1) {
    step += progressionStep;
    progression.push(step);
  }
  return progression;
};

const progressionStart = () => {
  const progressionStep = getRandomInt(1, 10);
  const stepCount = getRandomInt(5, 11);
  const startInt = getRandomInt(1, 15);
  const deletedItem = getRandomInt(0, stepCount);
  const progression = progressionGeneration(startInt, progressionStep, stepCount);
  const answer = progression[deletedItem];
  progression[deletedItem] = '..';
  const question = `${progression.join(' ')}`;
  return [question, answer.toString()];
};

const description = 'What number is missing in the progression?';
const getQuestionAndAnswer = () => {
  const [question, correctAnswer] = progressionStart();
  return [question, correctAnswer];
};

export default () => {
  playGame(description, getQuestionAndAnswer);
};
