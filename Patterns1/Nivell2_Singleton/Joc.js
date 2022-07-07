const Jugadorx = require("./Jugadorx");
const Marcador = require("./Marcador");
/* Para cada joc que generaremos habrá un marcador (que será un Singleton). Por eso lo importamos el singleton Marcador como atributo de la clase Juego.
La clase Juego capta la info de jugador y puntuación a través
del objeto Marcador (que lo hemos importado como un atributo en el contructor Juego)*/
class Joc {
    constructor(nomGame){
        this.nomGame = nomGame;
        this.marcador= new Marcador();
    }
//Métodos propios de la clase Joc

    afegirjugadorx(jugadorx) {
        if(jugadorx instanceof Jugadorx) {
            this.marcador.jugadorxs.push(jugadorx.nom_jugadorx);   //.push --> Método que sirve para añadir elementos a una array
            this.marcador.puntuacions.push(0);
        } else {
            console.log(`Error: ${jugadorx} NO és un objecte Jugadorx`);
        }
    }
    
    sumarPunts(Jugadorx, puntssumats)
        {
        let jugadorxMarcadorIndex = this.puntuacio.findIndex(obj => Jugadorx === obj.Jugadorx);
        this.puntuacio[jugadorxMarcadorIndex].punts += puntssumats;
        };
        
    restarPunts(jugador) {
        let
        return this.sort((a, b) => b.punts - a.punts)
        };

    reiniciarMarcador()
    {
        this.jugadorx = [];
        this.puntuacio = [];
    };
        
    guanyadorx() 
    {
        console.log(`Enhorabona, ${this.puntuacio.sort()[0].Jugadorx} !!! Ets xl guanyadorx d'aquesta partida!!! `);
    };
        
module.exports = Joc; 

