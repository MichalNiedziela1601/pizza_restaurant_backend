'use strict';
const db = require('../services/db.connect');
const parse = require('../services/camelCaseParse');

function getMenu() {
    return db.any('SELECT * FROM pizza').then(menus => parse.parseArrayOfObject(menus));
}

function addMenu(data) {
    const sql = 'INSERT INTO pizza (name, ingredients, price, thumb) VALUES ($1,$2,$3,$4)';
    return db.any(sql, [data.name, data.ingredients, data.prices, data.thumb]);
}

module.exports = {
    getMenu, addMenu
};
