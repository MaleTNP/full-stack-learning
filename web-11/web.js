
var http = require("http");
var daemon = http.createServer(dispatcher);
daemon.listen(80);

function dispatcher(request, response) {
  if (request.url == "/shop") return showShopPage(request, response);
  if (request.url == "/"    ) return showHomePage(request, response);
  return showClientError(request, response);
}

function showShopPage(request, response) {
  var head = { };
  head["Content-Type"] = "text/html";
  response.writeHead(200, head);
  response.write("<button>Mocha</button><button>Latte</button>");
  response.end();
}

function showHomePage(request, response) {
  var head = { };
  head["Content-Type"] = "text/html";
  response.writeHead(200, head);
  response.write("This is a homepage");
  response.end();
}

function showClientError(request, response) {
  var head = { };
  head["Content-Type"] = "text/html";
  response.writeHead(404, head);
  response.write("<i>404 Not Found</i>");
  response.end();
}
