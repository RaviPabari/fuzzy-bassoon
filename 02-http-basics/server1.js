const http = require('http');
//creating a basic server 
//run this and go to http://localhost:5000/ 
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('working fine as expected');
        res.end();
    }else{
        res.write('another pages are working fine too...');
        res.end();
    }
});
//server listening on port 5000
server.listen(5000);
console.log('server created on port 6666')