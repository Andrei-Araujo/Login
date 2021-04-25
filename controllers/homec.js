module.exports = function (app) {
  var Usuario = app.models.usuarios;

  var HomeController = {
    index: function (request, response) {
      response.render("home/inicio");
    },
    login: function (request, response) {
      var email = request.body.usuario.email;
      var senha = request.body.usuario.senha;
      var query = { email: email, senha: senha };

      Usuario.findOne(query).exec(function (erro, usuario) {
        if (erro) {
          console.log("Erro ao tentar realizar o login: " + erro);
          response.redirect("/");
        } else {
          request.session.usuarioSession = usuario;
          response.redirect("/menu");
        }
      });
    },
    logout: function (request, response) {
      request.session.destroy();
      response.redirect("/");
    },
  };

  return HomeController;
};
