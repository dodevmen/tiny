'use strict';

const chalk = require('chalk');
const boxen = require('boxen');
const gentlyCopy = require('gently-copy');
const packageJson = require('./package.json');

const options = {
    padding: 1,
    margin: 1
};

const header = `
${ chalk.blue.bold('╦═╗╦═╗╔═╗╔═╗╔╦╗╦═╗╔═╗╔═╗╦═╗') }
${ chalk.blue.bold('║╣ ║╦╝║ ║║ ║ ║ ║═╣║═║╚═╗║╣') }
${ chalk.blue.bold('╩  ╩╚═╚═╝╩ ╩ ╩ ╩═╝╩ ╩╚═╝╩═╝') }
${ chalk.white.bold('v' + packageJson.version) }


${ chalk.white.bold('Run FrontBase with:') }

${ chalk.blue.bold('npm run dev') }
Runs the project locally

${ chalk.blue.bold('npm run build') }
Builds the project for production

${ chalk.blue.bold('npm run cypress:open') }
Will execute Cypress E2E testing
`;

const [, ...trimmed] = header.split('\n');
const card = chalk.white(boxen(trimmed.join('\n'), options));

const filesToCopy = ['*', 'files'];
const userPath = process.env.INIT_CWD;

gentlyCopy(filesToCopy, userPath);

console.log(card);