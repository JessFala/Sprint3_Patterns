const CONVERSION = require('./conversor_divisas.json');

function conversion(articulos) {
    articulos.forEach(art => {
        let conversorDivisa = art.div.toUpperCase() + "_EUR";
        let coef = CONVERSION[conversorDivisa];
        art.coef = coef;
        art.precio_eur = art.precio * coef;
    });
}

module.exports = conversion;