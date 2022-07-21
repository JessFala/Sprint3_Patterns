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

const calculator = new Maths();
const app = new Middleware(calculadora);

app.usar((req, next) => {
  req.a **= 2;
  req.b **= 2;
  console.log("middle1", req);
  next();
});

app.usar((req, next) => {
    req.a **= 3;
    req.b **= 3;
    console.log("middle2", req);
    next();
});

app.usar((req, next) => {
    req.a /= 2;
    req.b /= 2;
    console.log("middle3", req);
    next();
  });


console.log(app.sumar({a: 3, b: 2}));
console.log(app.restar({a: 3, b: 2}));
console.log(app.multiplicar({a: 3, b: 2}));
