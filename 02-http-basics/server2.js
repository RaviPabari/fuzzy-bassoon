const http = require('http');
//simple server that logs the message whenever we try to access or call the localhost on port 3000
const server = http.createServer();
server.on('connection',(socket)=>{
    console.log('New Connection....')
})
////////
//
////////Basic http server
//run this and go to http://localhost:3000/ 
const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.write('Working fine as f');
        res.end();
    }else{
        res.write("No functionality available yet");
        res.end();
    }
 });
//listening on port 3000
server.listen(3000);
console.log('listening on port 3000')