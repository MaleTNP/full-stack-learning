
var express = require("express");
var daemon = express();
daemon.listen(80);

daemon.get("/api/search", searchBranch);
daemon.get("/api/get-area", showArea);

function searchBranch(request, response) {
  var city = request.query.city;
  if (city == null) { city = ""; }
  var flag = false;
  for (var i = 0; i < branches.length; i++) {
    if (branches[i] == city) { flag = true; }
    if (branches[i] != city) { }
  }
  var result = { };
  result.city  = city;
  result.found = flag;
  response.send(result);
}

var branches = ["Atlanta", "Boston", "Chicago", "Detroit", "New York"];

function showArea(request, response) {
  var w = request.query.width;
  var h = request.query.height;
  var detail = { };
  detail.width  = w;
  detail.height = h;
  detail.area   = w * h; 
  detail.date   = new Date();
  response.send(detail);
}
