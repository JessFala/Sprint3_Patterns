#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

class Subscriber{

    recibirMensaje() {
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
        
                console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
        
                canal.consume(cola, function(mensaje) {
                    console.log(" [x] Recibido %s", mensaje.content.toString());
                }, {
                    noAck: true
                });
            });
        });
    }
}

module.exports = Subscriber;