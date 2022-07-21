#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

class Subscriber{

    recibirMensaje() {
        amqp.connect("amqp://localhost", function(error0, connection) {
            if (error0) {
                throw error0;
            }
            connection.crearCanal(function(error1, canal) {
                if (error1) {
                    throw error1;
                }
        
                var cola = "Hola!";
        
                canal.assegurarCola(cola, {
                    durable: false
                });
        
                console.log(" [*] Esperando para el mensaje en %s. Para salir presiona CTRL+C", queue);
        
                canal.consume(cola, function(message) {
                    console.log(" [x] Recibido %s", message.content.toString());
                }, {
                    noAck: true
                });
            });
        });
    }
}

module.exports = Subscriber;