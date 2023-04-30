#!/usr/bin/env node
import evenGame from '../games/brain-even.js'
import brainCalc from '../games/brain-calc.js';
import { userGreeting } from '../src/cli.js';

userGreeting();
evenGame();
brainCalc();
