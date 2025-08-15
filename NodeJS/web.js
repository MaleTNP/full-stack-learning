
var http = require("http");
var daemon = http.createServer(dispatcher);
daemon.listen(80)

function dispatcher(request, response) {
  if (request.url == "/shop") return showShopPage(request, response);
  if (request.url == "/")     return showHomePage(request, response);
  return showClientError(request, response);
  // 404
  // var head = { };
  // head["Content-Type"] = "text/html";
  // response.writeHead(404, head);
  // response.write("<i>404 Not Found</i>");
  // response.end();
}

function showShopPage(request, response) {
  let head  = { };
  head["Content-Type"] = "text/html";
  response.writeHead(200, head);
  response.write("<button>Mocca</button><button>Latte</button>");
  response.end();
}

function showHomePage(request, response) {
  let head = { };
  head["Content-Type"] = "text/html";
  response.writeHead(200, head);
  response.write("<i>This is the home page</i>");
  response.end();
}

function showClientError(request, response) {
  let  head = { };
  head["Content-Type"] = "text/html";  
  response.writeHead(404, head);
  response.write("<i>404 Not Found</i>");
  response.end();
}
