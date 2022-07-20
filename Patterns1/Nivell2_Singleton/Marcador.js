
//Singleton
class Marcador {
  constructor() {
    this.puntuacions = [];
    this.jugadorxs = [];

    if (typeof Marcador.instance === "object"){
      return Marcador.instance;
    }

   Marcador.instance = this;
   return this;
  }


mostrarMarcador() 
{
  return this.Marcador;
}
};

module.exports = Marcador; 

