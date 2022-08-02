
// Generamos un servidor http
const http = require("http");

const requestListener = (req, res) => {
  res.writeHead(200);
  res.end("<h1>My first server!</h1>");
};

const host = 'localhost';
const port = 3000;

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});