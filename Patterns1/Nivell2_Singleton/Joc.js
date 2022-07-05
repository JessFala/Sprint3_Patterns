const Jugadorx = require("./Jugadorx");
const Marcador = require("./Marcador");

class Joc {
    constructor(nom, puntuacio){
        this.nom = nom;
        this.jugadorx = [];
        this.puntuacio = puntuacio;
    }
};

    afegirjugadorx(Jugadorx, puntuacio); 
    {
     if (this.puntuacio.Marcador.some(e => e.nom === nom_jugadorx.Jugadorx)) {
        console.log(`Xl jugadorx ${nom_jugadorx} ja està al joc i a punt per a la propera partida!`)
     } else {
     this.puntuacio.Marcador.push({ Jugadorx: nom_jugadorx, puntuacio: 0 })
         return console.log(`Xl jugadorx ${Jugadorx.nom_jugadorx} s'ha afegit al joc correctament.`);
        }
    };
    
    sumarPunts(Jugadorx, puntssumats)
        {
        let jugadorxMarcadorIndex = this.puntuacio.findIndex(obj => Jugadorx === obj.Jugadorx);
        this.puntuacio[jugadorxMarcadorIndex].punts += puntssumats;
        };
        
    restarPunts() 
        {
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

