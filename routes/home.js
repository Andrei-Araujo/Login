module.exports = function (app) {
  var valida = require("./../middlewares/valida");

  var homec = app.controllers.homec;

  app.get("/", homec.index);
  app.post("/login", homec.login);
  app.get("/logout", homec.logout);

  var eventosc = app.controllers.eventosc;

  app.get("/menu", valida, eventosc.menu);

  var cadastroc = app.controllers.cadastroc;
  app.post("/novoUsuario", cadastroc.novoUsuario);
};
