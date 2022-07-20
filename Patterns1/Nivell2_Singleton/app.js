const Jugadorx = require("./Jugadorx.js");
const Joc = require("./Joc.js");

//Crear un joc
let joc1 = new Joc("Scrabble");

//Crear els objectes Jugadorx
let jugadorx1 = new Jugadorx("Leyva");
let jugadorx2 = new Jugadorx("Tero");
let jugadorx3 = new Jugadorx("Terry");

//Afegir Jugadorxs

joc1.join(jugadorx1);
joc1.join(jugadorx2);
joc1.join(jugadorx3);
 

//Mostrar Jugadorxs
console.log (joc1.joc.jugadorx1);
console.log (joc1.joc.jugadorx2);
console.log (joc1.joc.jugadorx3);

//Mostrar puntuació abans d'iniciar la partida

joc1.deductPunts(jugadorx1);
joc1.deductPunts(jugadorx2);
joc1.deductPunts(jugadorx3);

//Mostrar puntuació final
console.table(joc1.mostrarMarcador());

//Mostrar xl guanyadorx
console.log(joc1.mostrarGuanyadorx());
