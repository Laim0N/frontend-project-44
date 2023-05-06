#!/usr/bin/env node
import evenGame from './games/brain-even.js';
import brainCalc from './games/brain-calc.js';
import brainGcd from './games/brain-gcd.js';
import brainProgression from './games/brain-progression.js';
import { userGreeting } from '../src/cli.js';
import primeGame from './games/brain-prime.js';

userGreeting();
evenGame();
brainCalc();
brainGcd();
brainProgression();
primeGame();
