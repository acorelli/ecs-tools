const http = require('http')
const https = require('https')
const fs = require('fs')

const hostname = '0.0.0.0';
const port = 80;

const server = http.createServer((req, res) => {
  res.writeHead(301, { Location: `https://${req.headers.host}${req.url}` });
  res.end();
});

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
}
const sserver = https.createServer({}, (req, res) => {
  res.writeHead(200);
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Security');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

sserver.listen(443, hostname, () => {
  console.log(`SServer running at http://${hostname}:443/`);
});