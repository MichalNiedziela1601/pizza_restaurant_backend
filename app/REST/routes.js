'use strict';
const userEndpoint = require('./user.endpoint');
const menuEndpoint = require('./menu.endpoint');

module.exports = {
    register(server){
        userEndpoint.register(server);
        menuEndpoint.register(server);
    }
};
