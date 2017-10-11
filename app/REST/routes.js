'use strict';
const userEndpoint = require('./user.endpoint');

module.exports = {
    register(server){
        userEndpoint.register(server);
    }
};
