'use strict';
const MenuManager = require('../bussiness/menu.bussines');
module.exports = {
    register(server)
    {
        server.route({
            method: 'GET',
            path: '/api/menu',
            handler(request, reply)
            {
                MenuManager.getMenu().then(reply);
            }
        });

        server.route({
            method: 'POST',
            path: '/api/menu',
            handler(request, reply) {
                MenuManager.addMenu(request.payload).then(reply);
            }
        });

        server.route({
            method: 'POST',
            path: '/api/menu/image',
            config: {
                payload: {
                    output: 'stream',
                    allow: 'multipart/form-data',
                    parse: true
                }
            },
            handler(request, reply) {
                const data = request.payload;
                if (data.file) {
                    MenuManager.saveImage(data.file).then(reply);
                }
            }
        });
    }
};
