// 跨域问题，当你无法操作后台是否可以跨域的时候
var http = require('http');
var https = require('https');
var server = http.createServer();
var fs = require('fs');
server.listen('8080');
var url = require('url');
const express = require("express");
const exStatic = require("express-static");


const app = express();
 
app.use(exStatic('./'));
app.listen(8081);