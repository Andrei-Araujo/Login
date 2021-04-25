module.exports = function (app) {
  var Usuario = app.models.usuarios;

  var CadastroController = {
    novoUsuario: function (request, response) {
      var nome = request.body.usuario.nome;
      var senha = request.body.usuario.senha;
      var cpfUsuario = request.body.usuario.cpf;
      var email = request.body.usuario.email;
      var confirma = request.body.usuario.confirma;

      var emailValidator = require("email-validator");
      var cpf = require("cpf");

      if (
        nome.trim().length < 3 ||
        senha != confirma ||
        senha.length < 3 ||
        !cpf.isValid(cpfUsuario) ||
        !emailValidator.validate(email)
      ) {
        if (nome.trim().length < 3) {
          console.log("Campo preenchido errado: nome");
        } else if (senha != confirma || senha.length < 3) {
          console.log("Campo preenchido errado: senha");
        } else if (!cpf.isValid(cpfUsuario)) {
          console.log("Campo preenchido errado: cpf");
        } else if (!emailValidator.validate(email)) {
          console.log("Campo preenchido errado: email");
        }

        response.redirect("/");
      } else {
        var usuario = {
          nome: nome,
          senha: senha,
          cpf: cpfUsuario,
          email: email,
        };

        Usuario.create(usuario, function (erro, item) {
          if (erro) {
            console.log("Erro ao cadastrar o usuário: " + erro);
            response.redirect("/");
          } else {
            console.log("Usuário adicionado: " + item);
            response.redirect("/");
          }
        });
      }
    },
  };

  return CadastroController;
};
