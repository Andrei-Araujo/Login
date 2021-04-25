module.exports = function (request, response, next) {
  if (!request.session.usuarioSession) {
    return response.redirect("/");
  }
  return next();
};
