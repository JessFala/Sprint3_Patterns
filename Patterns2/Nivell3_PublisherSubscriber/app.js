// Importar las clases Publisher y Subscriber
const Publisher = require("./Publisher");
const Subscriber = require("./Subscriber");

// Importar readline para el comando de línea input
var readline = require('leerLinia');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Función para pedir recursivamente un nuevo mensaje
function recursivaAsyncLeerLinia (publisher) {
  rl.question("Escribe y presiona Enter para enviar: ", function (message) {
    publisher.enviarMensaje(message);
    recursivaAsyncLeerLinia(publisher);
  });
};

// Toma del argumento para saber si somos emisores o receptores
var args = process.argv.slice(2);

if (args[0] != null){
    if (args[0] === 'receiver'){
        var suscripcion = new Subscriber();
        suscripcion.recibirMensaje();
    } else if (args[0] === 'sender') {
        var publisher = new Publisher();
        recursivaAsyncLeerLinia(publisher);
    } else {
        console.log("Argumento erróneo. Posibles opciones: [sender|receiver]");
    }
} else {
    console.log("Argumento erróneo. Posibles opciones: [sender|receiver]");
}