const http = require('http');



const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    const url = req.url;
    if (url === '/') {
        res.write('<html><head><title>Enter Message</title></head><body><form action="/message" method="POST"><input type="text"><button type="submit">SEND</button></input></form></body></html>');
        return res.end;
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>My First Page</title></head><body><h1>Hello from my Node.js Server!</h1></body></html>');
    res.end;
});

server.listen(3000);