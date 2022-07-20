const Jugadorx = require("./Jugadorx.js");
const Marcador = require("./Marcador.js");
/* Para cada 'joc' que generaremos habrá un marcador (que será un Singleton). 
Por eso importamos el singleton Marcador como atributo de la clase Juego.
La clase Juego capta la info de jugadorxs y puntuacions a través
del objeto Marcador (que lo hemos importado como atributo en el contructor Juego)*/
class Joc {
    constructor(nomGame){
        this.nomGame = nomGame;
        this.marcador= new Marcador;
    };

    //Métodos propios de la clase 'Joc'

    afegirJugadorx(jugadorx) {
        if(jugadorx instanceof Jugadorx){
            this.marcador.jugadorxs.push(jugadorx.nom_jugadorx);
            this.marcador.puntuacions.push(0);
        }
    }

    sumarPunts(jugadorx){
        let jugadorxIndex = this.marcador.jugadorxs.indexOf(jugadorx.nom_jugadorx);
            if(jugadorxIndex !== -1) {
                this.marcador.puntuacions[jugadorxIndex] += 1;
                //this.marcador.puntuacions[jugadorxMarcadorIndex] =  this.marcador.puntuacions[jugadorxMarcadorIndex] + 1
            }
        }
        
    restarPunts(jugadorx) {
        let jugadorxIndex = this.marcador.jugadorxs.indexOf(jugadorx.nom_jugadorx);
        if(jugadorxIndex !== -1){
            this.marcador.puntuacions[jugadorxIndex] -= 1;
        }
    }
    
    mostrarPuntuacio(){
        return this.marcador;
    }

    mostrarGuanyadorx() {
    const maxPuntuacio = Math.max(...this.marcador.puntuacions);
    const jugadorxIndex = this.marcador.puntuacions.indexOf(maxPuntuacio);
    return (`Enhorabona! Xl guanyadorx de la partida al *${this.nomGame}* és ${this.marcador.jugadorxs[jugadorxIndex]}!!!`); 
    }
}

module.exports = Joc; 

