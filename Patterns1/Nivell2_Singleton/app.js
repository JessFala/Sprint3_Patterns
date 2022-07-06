const Jugadorx = require('./Jugadorx');
const Joc = require('./Joc');
const Marcador = require('./Marcador');

let joc = new Joc("Remigio", 0);

afegirjugadorx = (new Jugadorx1("Leyva", 16));
afegirjugadorx = (new Jugadorx2("Thiago", 12));

//Sumar punts

joc.marcador.sumarPunts("Leyva", 4);
joc.marcador.sumarPunts("Thiago", 1);

// Singleton

let marcador = new Marcador();
marcador.sumarPunts("Leyva", 4)

joc.marcador.mostrarPunts()
joc.marcador.guanyadorx()
