'use strict';
const promise = require('bluebird');
const options = {
    promiseLib: promise
};

const pgp = require('pg-promise')(options);
const configFile = require('../config');
const config = {
    host: configFile.db.host,
    port: configFile.db.port,
    database: configFile.db.database,
    user: configFile.db.user,
    password: configFile.db.password
};

module.exports = pgp(config);
