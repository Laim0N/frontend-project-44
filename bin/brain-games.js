#!/usr/bin/env node
import evenGame from '../bin/games/brain-even.js'
import brainCalc from '../bin/games/brain-calc.js';
import brainGcd from '../bin/games/brain-gcd.js';
import brainProgression from '../bin/games/brain-progression.js';
import { userGreeting } from '../src/cli.js';

userGreeting();
evenGame();
brainCalc();
brainGcd();
brainProgression();