var express = require("express");

app = express();
var mongoose = require("mongoose");

global.db = mongoose.connect("mongodb://localhost:27017/teste_login", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection.on("connected", function () {
  console.log("Conexão estabelecida");
});

mongoose.connection.on("error", function (error) {
  console.log("Erro de conexão: " + error);
});

mongoose.connection.on("disconnected", function () {
  console.log("Conexão finalizada");
});

var load = require("express-load");
var cookieParser = require("cookie-parser");
var expressSession = require("express-session");

app.set("views", __dirname + "/views");
app.set("models", __dirname + "/models");
app.set("controllers", __dirname + "/controllers");

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));
app.use(cookieParser("nodeEventos"));
app.use(expressSession());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

load("models").then("controllers").then("routes").into(app);

app.listen(3001, function () {
  console.log("Aplicação em execução");
});
