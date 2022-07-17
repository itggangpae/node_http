const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req, res) => {
    if (req.url === '/session') {
        const data = await fs.readFile('./sessionstorage.html');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(data);
    } else if (req.url === '/local') {
        const data = await fs.readFile('./localstorage.html');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(data);
    }else if (req.url === '/sql') {
        const data = await fs.readFile('./websql.html');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(data);
    }else if (req.url === '/indexdb') {
        const data = await fs.readFile('./indexeddb.html');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(data);
    }
  }).listen(8086, () => {
    console.log('8086번 포트에서 서버 대기 중입니다');
  }
);
