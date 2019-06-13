'use strict';

const fs = require('fs-extra');

fs.copy('./files', './', err =>{
  if(err) return console.error(err);
  console.log('success!');
});