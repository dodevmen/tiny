'use strict';

const gentlyCopy = require('gently-copy');

const filesToCopy = ['*', 'files'];
const userPath = process.env.INIT_CWD;

gentlyCopy(filesToCopy, userPath);