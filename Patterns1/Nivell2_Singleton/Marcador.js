let instance = null;

class Marcador {
  constructor() {
    this.puntuacio = []
    if (!instance) {
      instance = this;
    }
  return instance;
  }
};

mostrarPunts() 
{
  console.log("marcador: ",
  this.puntuacio.sort())
};

module.exports = Marcador;