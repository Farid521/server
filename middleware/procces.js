function middlewareFunction(request, response, next) {
  console.log(request);
  response.status(200).send("success");
  next();
}
