const EventEmitter = require('events');
let emitter = new EventEmitter();

emitter.on('missatge', (usuarix, missatge, tema) => {
    console.log(`Hi! xl usuarix: '${usuarix.nom}' ha enviat el següent missatge: '${missatge} al tema: '${tema}'`);
});

class Tema {
    constructor() {
    this.tema = [];
    this.subscripcio = [];
  }

  let tema = new Tema();
/*CrearTema(usuarix, tema){
    if(usuarix.nom === undefined) {
        console.log(`Xl usuarix no está registradx`);
    } else {
    console.log(`Xl usuarix: '${usuarix.nom}' ha creat el tema: '${tema}'`);
    this.tema.push(tema);
    }*/

}
 
subscripcioTemes(usuarix, tema){
    if(usuarix.nom === undefined && tema === undefined){
        console.log(`Xl usuarix i/o el tema no es troba/en registrat/txs)`);
    } else {
        console.log(`Xl usuarix: '${usuarix.nom}' s'ha subscript al tema: '${tema}'`);
        this.subscripcio.push(tema);
    }

}

comunicarMembres (usuarix, missatge, tema){
emitter.emit("missatge", usuarix, missatge, tema);

}
}

module.exports = Tema;
