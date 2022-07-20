const Jugadorx = require("./Jugadorx.js");
const Marcador = require("./Marcador.js");
/* Para cada joc que generaremos habrá un marcador (que será un Singleton). 
Por eso importamos el singleton Marcador como atributo de la clase Juego.
La clase Juego capta la info de jugadorxs y puntuacions a través
del objeto Marcador (que lo hemos importado como atributo en el contructor Juego)*/
class Joc {
    constructor(nomGame){
        this.nomGame = nomGame;
        this.marcador= new Marcador();
        this.arrayJugadorxs = [];
    }
}
//Métodos propios de la clase Joc

    afegirjoc(nomGame);
    {
        const joc1 = new Joc ("Srabble");
    }

    afegirjugadorx(nom_jugadorx);
    {
        const jugadorx = new Jugadorx(nom_jugadorx);
        this.arrayJugadorxs.push(jugadorx);
    }
    
    sumarPunts(Jugadorx)
        {
        let jugadorxMarcadorIndex = this.puntuacio.jugadorx.indexOf(Jugadorx.nom_jugadorx);
            if(jugadorxMarcadorIndex !== -1) {
                this.Marcador.puntuacio[jugadorxMarcadorIndex] += 1;
            }
        };
        
    restarPunts(Jugadorx); {
        let jugadorxMarcadorIndex = this.marcador.jugadorx.indexOf(Jugadorx.nom_jugadorx);
        if(jugadorxMarcadorIndex !== -1){
            this.Marcador.puntuacio[jugadorxMarcadorIndex] -= 1;
        }
    };

    
    mostrarPuntuació()
    {
        return this.Marcador;
    }

    mostrarGuanyadorx()   
    {
    const maxPuntuacio = Math.max(...this.marcador.puntuacio);
    const jugadorxMarcadorIndex = this.marcador.puntuacio.indexOf(maxPuntuacio);
    return (`Enhorabona! Xl guanyadorx de la partida al *${this.nomGame}* és ${this.marcador.Jugadorx[jugadorxMarcadorIndex]}!!!`); 
    };
    
module.exports = Joc; 

