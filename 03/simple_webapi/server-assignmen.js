const http = require('http');
// create server
const server = http.createServer((req,res)=>
{
    res.end('Response data from port 3000');
});

server.listen(3000,'127.0.0.1',()=>{
    console.log('Listening to reques on port 3000');
});