const express = require('express');
const app = express();
var server = app.listen(3000);
app.use(function(req, res, next) {
    //跨域处理
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length,Authorization,Accept,x-requested-with');
    res.writeHead(200, { 'Content-Type': 'text/json;charset=utf-8' });
    next();
});
app.get('/api/good1', function(req, res) {
    var data = JSON.stringify({
        id: 001,
        price: 100,
        ishot: true,
        title: 'this is good1',
        descript: '物品一'
    });
    res.end(data);
});
app.get('/api/good2', function(req, res) {
    var data = JSON.stringify({
        id: 002,
        price: 200,
        ishot: true,
        title: 'this is good2',
        descript: '物品二'
    });
    res.end(data);
});
app.get('/api/good3', function(req, res) {
    var data = JSON.stringify({
        id: 003,
        price: 300,
        ishot: true,
        title: 'this is good3',
        descript: '物品三'
    });
    res.end(data);
});
