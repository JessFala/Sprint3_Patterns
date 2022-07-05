const Usuarix = require('./Usuarixs');
const Tema = require('./Tema');

//Crear Usuarixs
let usuarix1 = new Usuarix('Leyva');
console.log(usuarix1);

let usuarix2 = new Usuarix('Thiago');
console.log(usuarix2);

//Crear temes
let tema = new Tema();

tema.CrearTema(usuarix1,'Tema del dia: Comitè benvinguda Thiago');
tema.CrearTema(usuarix1,'Tema del dia: Benvinguda Thiago');
tema.CrearTema(usuarix2, 'Agraïments pel Leyva');

//Subscripció a temes

tema.subscripcioTemes(usuari2x, 'Agraïments pel Leyva');

// A la consola de l'usuarix sortirà un missatge per confirmar-li que està donatx d'alta el missatge.

tema.comunicarMembres (usuarix1, 'TOT OK!!!', "Tema del dia: Comitè benvinguda Thiago");
tema.comunicarMembres (usuarix1, 'TOT OK!!!', "Tema del dia: Benvinguda Thiago");
tema.comunicarMembres (usuarix2, 'Et donem la benvinguda!', "M'heu fet sentir molt Benvingudx. Gràcies Leyva per totes les molèsties que t'has pres")