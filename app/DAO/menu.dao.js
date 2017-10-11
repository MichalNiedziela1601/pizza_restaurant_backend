'use strict';
const db = require('../services/db.connect');
const parse = require('../services/camelCaseParse');

function getMenu() {
    return db.any('SELECT * FROM pizza').then(menus => parse.parseArrayOfObject(menus));
}

module.exports = {
    getMenu
}
