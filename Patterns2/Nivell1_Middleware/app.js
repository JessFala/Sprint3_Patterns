const Middleware = require("./Middleware");

class Maths {
  sumar({a, b}) {
    return a + b;
  }
  restar({a, b}) {
    return a - b;
  }
  multiplicar({a, b}) {
    return a * b;
  }
}

const calculadora = new Maths();
const app = new Middleware(calculadora);

app.usar((req, next) => {
  req.a **= 2;
  req.b **= 2;
  console.log("middle1", req);
  next();
});

app.usar((req, next) => {
    req.b = req.b * 3 // 2o operador se multplicará por 3
    console.log("middle2", req);
    next();
});

app.usar((req, next) => {
    req.a /= 2;
    req.b /= 2;
    console.log("middle3", req);
    next();
  });


console.log(app.sumar({a: 3, b: 9}));
console.log(app.restar({a: 3, b: 2}));
console.log(app.multiplicar({a: 2, b: 3}));
