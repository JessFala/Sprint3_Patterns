const conversion = require("./decorator");

const articulos = [
    {
        nombre: "C-amiseta",
        div: "CAD",
        precio: 10
    },
    {
        nombre: "V-aquero",
        div: "CNY",
        precio: 10
    },
    {
        nombre: "J-ersey",
        div: "JPY",
        precio: 10
    },
    {
        nombre: "P-antalon",
        div: "CHF",
        precio: 10
    }
];

console.log(articulos);
conversion(articulos);
console.log(articulos);