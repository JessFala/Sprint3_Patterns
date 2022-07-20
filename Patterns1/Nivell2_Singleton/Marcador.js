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
}

mostrarMarcador() 
{
  return this.Marcador;
}

mostrarGuanyadorx()
{
  return this.puntuacions.sort([0]);
}

module.exports = Marcador; 

