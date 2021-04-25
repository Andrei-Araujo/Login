module.exports = function (app) {
  var EventosController = {
    menu: function (request, response) {
      var usuario = request.session.usuarioSession;
      var params = { usuarioParams: usuario };

      response.render("eventos/menu", params);
    },
  };
  return EventosController;
};
