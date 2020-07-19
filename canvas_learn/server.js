const express = require('express');
const server = express();
const fs = require('fs');
server.use(express.static('img'));
server.get('/',function(req,res){
    fs.readFile('./index.html',(err,data)=>{
        res.end(data);
    })
});
server.listen(3000);