#!/usr/bin/env node
import {play} from '../src/index.js';
import {greeting} from '../src/cli.js'
const username = greeting()
export {username}
play()
