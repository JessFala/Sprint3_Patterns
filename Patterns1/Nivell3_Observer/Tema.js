const EventEmitter = require('events');
class Tema extends EventEmitter {
    constructor(nom) {
        super();
        this.nom = nom;
    }

    alertaMissatge(missatge){
          this.emit(this.nom, missatge);
      }
  }
  module.exports = Tema;