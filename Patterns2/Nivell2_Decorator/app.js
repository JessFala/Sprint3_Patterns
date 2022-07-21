const conversion = require("./decorator");

const textilLanas = [
    {
        nombre: "lanaDeCordero",
        div: "CAD",
        precio: 9
    },
    {
        nombre: "lanaDeCachemir",
        div: "CNY",
        precio: 23
    },
    {
        nombre: "lanaDeAlpaca ",
        div: "JPY",
        precio: 25
    },
    {
        nombre: "lanaDeCamello",
        div: "CHF",
        precio: 30
    },
    {
        nombre: "lanaDeQiviut",
        div: "USD",
        precio: 33
    },
    {
        nombre: "lanaDeShetland",
        div: "GBP",
        precio: 28
    }
];

console.log(textilLanas);
conversion(textilLanas);
console.log(textilLanas);