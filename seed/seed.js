'use strict';
const db = require('../app/services/db.connect');
const fs = require('fs');
const Promise = require('bluebird');
const fileNames = ['seed/sql/schema.down.sql', 'seed/sql/schema.up.sql', 'seed/sql/seed.sql'];
const readFile = Promise.promisify(fs.readFile, fs);

Promise.reduce(fileNames, (total, file) => readFile(file, { encoding: 'UTF-8'})
        .then(file => db.any(file)), 0
).then(() => {
    console.log('Seeding script success');
    process.exit(0);
}).catch(error => {
    console.log(error);
    process.exit(1);
});
