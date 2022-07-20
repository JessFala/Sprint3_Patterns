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

    afegirJugadorx(joc1) {
        if(joc1 instanceof Jugadorx){
            this.marcador.jugadorxs.push(jugadorx.nom);
            this.marcador.puntuacions.push(0);
        }
    }

    sumarPunts(Jugadorx)
        {
        let jugadorxMarcadorIndex = this.puntuacions.jugadorxs.indexOf(joc1.nom);
            if(jugadorxMarcadorIndex !== -1) {
                this.marcador.puntuacions[jugadorxMarcadorIndex] += 1;
            }
        }
        
    restarPunts(Jugadorx) {
        let jugadorxMarcadorIndex = this.marcador.jugadorxs.indexOf(joc1.nom);
        if(jugadorxMarcadorIndex !== -1){
            this.marcador.puntuacions[jugadorxMarcadorIndex] -= 1;
        }
    }
    
    mostrarPuntuacio()
    {
        return this.marcador;
    }

    mostrarGuanyadorx()   
    {
    const maxPuntuacio = Math.max(...this.marcador.puntuacions);
    const jugadorxMarcadorIndex = this.marcador.puntuacions.indexOf(maxPuntuacio);
    return (`Enhorabona! Xl guanyadorx de la partida al *${this.nomGame}* és ${this.marcador.jugadorxs[jugadorxMarcadorIndex]}!!!`); 
    }
}

module.exports = Joc; 

