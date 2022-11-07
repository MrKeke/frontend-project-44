#!/usr/bin/env node
import {randomInteger} from  '../src/cli.js';
import playing from '../src/index.js';

const gameRule = `What number is missing in the progression?`

const round = () => {
    
}



const playthisgame = () => playing(gameRule, round)
playthisgame()