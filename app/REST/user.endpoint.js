'use strict';
module.exports = {

    register(server){
        server.route({
            method: 'GET',
            path: '/api/hello',
            handler(request,reply){
                return reply('hello');
            }
        });
    }
};
