#!/usr/bin/env node
import playing from '../src/index.js'
import {randomInteger} from  '../src/cli.js'

const gameRule = `Answer "yes" if the number is even, otherwise answer "no".`

const even = (number) => number % 2 === 0



const roundstart = () => {
  const que = randomInteger(1, 99)
  const answer = even(que) ? 'yes' : 'no'
  return [answer, que];
};

const runthisgame = () => playing(gameRule, roundstart)
runthisgame()
