'use strict';
const menuDao = require('../DAO/menu.dao');
const fs = require('fs');
const path = require('path');

function getMenu() {
    return menuDao.getMenu();
}

function addMenu(data) {
    return menuDao.addMenu(data);
}

function saveImage(image) {
    const name = image.hapi.filename;
    const filePath = path.join(`${__dirname}/../../../pizza_restaurant/client/assets/img/menu/${name}`);
    const file = fs.createWriteStream(filePath);

    return new Promise((resolve, reject) => {
        file.on('error', err => reject(err));
        image.pipe(file);
        image.on('end', () => {
            const ret = {
                filename: image.hapi.fileName,
                headers: image.hapi.headers
            };
            resolve(JSON.stringify(ret));
        });
    });
}


module.exports = {
    getMenu, addMenu, saveImage
};

