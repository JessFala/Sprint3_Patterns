const Jugadorx = require("./Jugadorx.js");
const Joc = require("./Joc.js");

//Crear un joc
let joc1 = new Joc("Scrabble");

//Crear els objectes Jugadorx
let jugadorx1 = new Jugadorx("Leyva");
let jugadorx2 = new Jugadorx("Tero");
let jugadorx3 = new Jugadorx("Terry");

//Afegir Jugadorxs

joc1.afegirJugadorx(jugadorx1);
joc1.afegirJugadorx(jugadorx2);
joc1.afegirJugadorx(jugadorx3);
 

//Mostrar Jugadorxs

console.log(joc1.marcador.jugadorxs);

//Mostrar puntuació abans d'iniciar la partida
joc1.sumarPunts(jugadorx1)
joc1.restarPunts(jugadorx1);
joc1.restarPunts(jugadorx2);
joc1.restarPunts(jugadorx3);

//Mostrar puntuació final
console.table(joc1.mostrarPuntuacio());

//Mostrar xl guanyadorx
console.log(joc1.mostrarGuanyadorx());
