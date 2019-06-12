'use strict';

const chalk = require('chalk');
const commander = require('commander');
const fs = require('fs-extra');
const path = require('path');
const packageJson = require('./package.json');


const header = `
    ${ chalk.blue.bold('╦═╗╦═╗╔═╗╔═╗╔╦╗╦═╗╔═╗╔═╗╦═╗') }
    ${ chalk.blue.bold('║╣ ║╦╝║ ║║ ║ ║ ║═╣║═║╚═╗║╣') }
    ${ chalk.blue.bold('╩  ╩╚═╚═╝╩ ╩ ╩ ╩═╝╩ ╩╚═╝╩═╝') }
`;

console.log(header);

// const ncp = require('ncp').ncp;
 
// ncp.limit = 16;
 
// ncp('./dominicmaitimu2', './', function (err) {
//  if (err) {
//    return console.error(err);
//  }
//  console.log('done!');
// });

// const program = new commander.Command(packageJson.name)
//     .version(packageJson.version)
//     .option('-p, --peppers', 'Add peppers')
//     .option('-P, --pineapple', 'Add pineapple')
//     .option('-b, --bbq-sauce', 'Add bbq sauce')
//     .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
//     .parse(process.argv);

// console.log('you ordered a pizza with:');
// if (program.peppers) console.log('  - peppers');
// if (program.pineapple) console.log('  - pineapple');
// if (program.bbqSauce) console.log('  - bbq');
// console.log('  - %s cheese', chalk.green(program.cheese));

// fs.writeFile('newfile.txt', 'Learn Node FS module', function (err) {
//     if (err) throw err;
//     console.log('File is created successfully.');
// }); 