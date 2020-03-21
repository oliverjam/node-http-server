const http = require("http");
const homeHandler = require("./handlers/home");
const goodbyeHandler = require("./handlers/goodbye");
const submitHandler = require("./handlers/submit");
const missingHandler = require("./handlers/missing");
const PORT = 3000;

const server = http.createServer((request, response) => {
  const url = request.url;
  const method = request.method;
  if (url === "/") {
    homeHandler(request, response);
  } else if (url === "/goodbye") {
    goodbyeHandler(request, response);
  } else if (method === "POST" && url === "/submit") {
    submitHandler(request, response);
  } else {
    missingHandler(request, response);
  }
});

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
