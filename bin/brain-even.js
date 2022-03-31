#!/usr/bin/env node
import { greeting, sayRules, resultComplain } from '../src/index.js';
import arr from '../src/cli-even.js';

greeting();
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
sayRules(rule);
resultComplain(arr);
