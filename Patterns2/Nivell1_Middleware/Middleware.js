class Middleware {
    constructor(objetivo) {
      this.objetivo = objetivo;
      this.middlewares = [];
      this.req = {};

      const prototype = Object.getPrototypeOf(this.objetivo);
      Object.getOwnPropertyNames(prototype).forEach(fn => {
      if (fn !== "constructor") return this.crearFn(fn);
    });
  }

  usar(middleware) {
    this.middlewares.push(middleware);
  }

  ejecutarMiddleware(i = 0) {
    if (i < this.middlewares.length) {
      this.middlewares[i].call(this, this.req, () =>
        this.ejecutarMiddleware(i + 1)
      );
    }
  }

  crearFn(fn) {
    this[fn] = args => {
      this.req = args;
      this.ejecutarMiddleware();
      return this.objetivo[fn].call(this, this.req);
    };
  }
}

module.exports = Middleware;