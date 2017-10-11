'use strict';
const Hapi = require('hapi');
const server = new Hapi.Server();
const config = require('./config');
const router = require('./REST/routes');

server.connection({
    host: 'localhost',
    port: 8000
});

router.register(server);


server.start(err => {
    if(err){
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
