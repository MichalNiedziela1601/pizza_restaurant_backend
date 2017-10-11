'use strict';
const menuDao = require('../DAO/menu.dao');

function getMenu()
{
    return menuDao.getMenu();
}


module.exports = {
    getMenu
};

