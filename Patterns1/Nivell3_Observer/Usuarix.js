const EventEmitter = require('events')

class Usuarix {
    constructor(nom) {
        this.nom = nom;
    }

    subscripcio(tema) {
        console.log(`${this.nom} subscrit a ${tema.nom}`)
        tema.on(tema.nom, arg => {
            console.log(`${this.nom} has rebut el missatge "${arg}" des de ${tema.nom}`);
        }) 
    }

    enviarMissatge(tema, missatge) {
        console.log(`${this.nom} ha enviat el següent missatge "${missatge}" al tema ${tema.nom}`);
        tema.alertaMissatge(missatge);
    }
}

module.exports = Usuarix