#!/usr/bin/env node
import { userGreeting } from '../src/cli.js';
import evenGame from '../src/games/brain-even.js';
import brainCalc from '../src/games/brain-calc.js';
import brainGcd from '../src/games/brain-gcd.js';
import brainProgression from '../src/games/brain-progression.js';
import primeGame from '../src/games/brain-prime.js';

userGreeting();
evenGame();
brainCalc();
brainGcd();
brainProgression();
primeGame();
