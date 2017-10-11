'use strict';
const MenuManager = require('../bussiness/menu.bussines');
module.exports = {
    register(server){
        server.route({
            method: 'GET',
            path: '/api/menu',
            handler(request,reply){
                MenuManager.getMenu().then(reply);
            }
        })
    }
}
