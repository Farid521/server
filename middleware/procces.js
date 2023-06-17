function middlewareFunction(request, response, next) {
  // console.log(request.query);
  response.status(200).send("success");
  next();
}

module.exports = middlewareFunction;
