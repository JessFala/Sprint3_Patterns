const Usuarix = require('./Usuarix.js');
const Tema = require('./Tema.js');

// Crear usuarixs
const usuarix1 = new Usuarix("Leyva");
const usuarix2 = new Usuarix("Tero");

// Crear temes
const tema1 = new Tema("Tema 1:Comitè benvinguda Tero.");
const tema2 = new Tema("Tema 2:Agraïments per en Leyva.");

// Subscripció usuarixs a temes
usuarix1.subscripcio(tema1);
usuarix2.subscripcio(tema2);
usuarix1.subscripcio(tema2);

// Enviar missatges

console.log()
usuarix1.enviarMissatge(tema1, "Benvingutx Tero!");

console.log()
usuarix2.enviarMissatge(tema2, "M'heu fet sentir molt benvingudx. Gràcies, Leyva, per les molèsties que t'has pres");

console.log()
usuarix1.enviarMissatge(tema2, "Tero, ha estat un plaer i una feina d'equip!");