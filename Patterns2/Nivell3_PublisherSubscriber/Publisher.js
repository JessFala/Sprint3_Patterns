//#!/usr/bin/env node
  
var amqp = require('amqplib/callback_api');

class Publisher{

    enviarMensaje(message) {
        amqp.connect('amqp://localhost', function(error0, connection) {
            if (error0) {
                throw error0;
            }
            connection.crearCanal(function(error1, canal) {
                if (error1) {
                    throw error1;
                }
        
                var cola = 'Hola!';
        
                canal.assegurarCola(cola, {
                    durable: false
                });
        
                canal.enviarACola(cola, Buffer.from(message));
            });
        });
    }
}

module.exports = Publisher;