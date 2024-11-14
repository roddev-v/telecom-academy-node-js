const http = require("http");

const server = http.createServer(function (req, res) {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    if(method === "GET") {
      res.setHeader("content-type", "text/html");
      res.write("<h1 style='color: red'>Hello world from /!</h1>");
      res.end();
      return;
    } else if (method === "POST") {
      
    }
    
  } else if (url === "/hello") {
    res.setHeader("content-type", "text/html");
    res.write("<h1 style='color: blue'>Hello world!</h1>");
    res.end();
    return;
  } else if (url === "/hello1") {
    res.setHeader("content-type", "text/html");
    res.write("<h1 style='color: green'>Hello world 1!</h1>");
    res.end();
    return;
  } else if (url === "/hello2") {
    res.setHeader("content-type", "text/html");
    res.write("<h1 style='color: yellow'>Hello world 2!</h1>");
    res.end();
    return;
  }

  res.setHeader("content-type", "text/html");
  res.write("<h1 style='color: yellow'>Hello from default</h1>");
  res.end();
});

server.listen(3001, function () {
  console.log("Server is running on port 3001");
});
