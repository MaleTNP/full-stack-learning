
var express = require("express");
var daemon  = express();
daemon.listen(1500);

// daemon.get();
// daemon.post();

daemon.get("/api/check", showCheck);
daemon.get("/api/products", showProducts);

function showCheck(request, response) {
  var detail = { };
  detail.message = "Service is OK";
  response.send(detail);
}

function showProducts(request, response) {
  var detail = ["Mocha", "Latte", "Espresso"];
  response.send(detail);
}
