import { playGame, getRandomInt } from '../../src/index.js';

const progressionGeneration = () => {
  const progressionStep = getRandomInt(1, 10);
  const stepCount = getRandomInt(5, 11);
  const startInt = getRandomInt(1, 15);
  const deletedItem = getRandomInt(0, stepCount);
  const progression = [];
  let step = startInt;

  progression.push(startInt);
  for (let i = 0; i < stepCount; i += 1) {
    step += progressionStep;
    progression.push(step);
  }

  const answer = progression[deletedItem];
  progression[deletedItem] = '..';
  const question = `Question: ${progression.join(' ')}`;

  return [question, answer.toString()];
};

const brainProgression = () => {
  console.log('What number is missing in the progression?');
  const questionsAndAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = progressionGeneration();
    questionsAndAnswers.push([question, correctAnswer]);
  }
  playGame(questionsAndAnswers);
};

export default brainProgression;
