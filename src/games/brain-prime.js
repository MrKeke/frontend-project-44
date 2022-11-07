#!/usr/bin/env node
import { randomInteger } from '../cli.js';
import playing from '../index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const intNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
const round = () => {
  const question = randomInteger(1, 50);
  //   intNumbers.includes(question) ? answer = 'yes' : answer = 'no';
  if (intNumbers.includes(question) === true) {
    return ['yes', question];
  }
  return ['no', question];
};
const playthisgame = () => playing(gameRule, round);
export default playthisgame;
