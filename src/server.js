const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app  = express();
        this.port = process.env.PORT;

        // Conectar a base de datos
        // Middlewares
        this.middlewares();
        // Rutas de mi aplicación
        this.routes();
    }
    middlewares() {
        // CORS
        this.app.use( cors() );
        // Lectura y parseo del body
        this.app.use( express.json() );
        // Directorio Público
        this.app.use( express.static('public') );
    }
    routes() {
        this.app.use( '/usuarios', require('./user/usuarios.route'));
        this.app.use( '/', require('./pages/pages.route'));
    }
    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }
}

require('dotenv').config();

const server = new Server();
const app=server.app;
server.listen();

module.exports=app;