import { randomBytes } from 'node:crypto';
import { createServer } from 'node:http';

import httpProxy from 'http-proxy';

// 100KB
const BUFFER_SIZE = 1000000;

const server = createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);
  res.end(randomBytes(BUFFER_SIZE).toString('base64'));
});
server.listen(8000);

const proxy = httpProxy.createProxyServer({
  target: 'http://localhost:8000'
});

proxy.listen(9000);
