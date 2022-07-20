const Jugadorx = require("./Jugadorx.js");
const Joc = require("./Joc.js");
const Marcador = require("./Marcador.js");

//Crear un joc
let joc1 = new Joc("Scrabble", 0);

//Afegir Jugadorxs
let jugadorx1 = new jugadorx ("Leyva");
let jugadorx2 = new jugadorx ("Tero");
let jugadorx3 = new jugadorx ("Terry");

//Mostrar Jugadorxs
console.log (joc1.scoreboard.jugadorxs);
console.log (joc2.scoreboard.jugadorxs);
console.log (joc3.scoreboard.jugadorxs);

//Mostrar puntuació abans d'iniciar la partida
console.table (joc1.showMarcador());
console.table (joc2.showMarcador());
console.table (joc3.showMarcador());

//Mostrar puntuació amb els punts sumats
console.table(joc1.showMarcador());

//Mostrar xl guanyadorx
console.log(joc1.mostrarGuanyadorx());
