import { randomBytes } from 'node:crypto';
import { createServer } from 'node:http';

const bufferSize = 1000000;
const port = 5500;

const server = createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(
    JSON.stringify({
      message: randomBytes(bufferSize).toString('base64')
    })
  );
});

server.listen(port);
console.log(`Server listening on port ${port}`);
