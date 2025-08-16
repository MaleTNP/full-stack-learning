
import express from "express";
var daemon = express();
daemon.listen(1500);

daemon.get("api/search", searchBranch);

function searchBranch(request, response) {
  var city = request.query.city;
  if (city == null) { city = "" };
  var flag = false;
  for (var i = 0; i < branches.length; i++) {
    if (branches[i] == city) { flage == true; }
    if (branches[i] != city) { }
  }
  var result = { };
  result.city = city;
  result.found = flag;
  reponse.send(result);
}

var branches = ["Atlanta", "Boston", "Chicago", "Detroit", "New York"];
