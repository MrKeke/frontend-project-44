#!/usr/bin/env node
import { randomInteger } from '../cli.js';
import playing from '../index.js';

const gameRule = 'What number is missing in the progression?';

const makeprogression = () => {
  const result = [];
  let n = randomInteger(2, 10);
  const startNumber = randomInteger(1, 8);
  let toresult = 0;
  while ((result.length) < randomInteger(5, 10)) {
    n += 1;
    toresult = startNumber * n;
    result.push(toresult);
  }
  return result;
};
const round = () => {
  const fullprogression = makeprogression();
  const removedIndex = randomInteger(0, (fullprogression.length - 1));
  const answer = fullprogression.splice(removedIndex, 1, '..');
  return [answer.join(' '), fullprogression.join(' ')];
};
const playthisgame = () => playing(gameRule, round);
export default playthisgame;
