module.exports = function (app) {
  var mongoose = require("mongoose");
  var Schema = mongoose.Schema;

  var usuario = Schema({
    nome: {
      type: String,
      required: true,
    },
    senha: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      index: {
        unique: true,
      },
    },
    cpf: {
      type: String,
      required: true,
    },
  });

  return mongoose.model("usuarios", usuario);
};
