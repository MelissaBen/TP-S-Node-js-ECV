const http = require('http');
const server = http.createServer((req, res) => {
    res.end('hello world'); 
    res.statusMessage = "Current password does not match";
    res.status(400).end();

});


server.listen(3000, () => console.log('le serveur tourne sur http://localhost:3000/ '))
