// 跨域问题，当你无法操作后台是否可以跨域的时候
var http = require('http');
var https = require('https');
var server = http.createServer();
var fs = require('fs');
var url = require('url');
const express = require("express");
const exStatic = require("express-static");
const request = require('request-promise');
const cheerio = require('cheerio');


const app = express();
const opts = {
    url:'https://juejin.im/post/5e1588b75188253a5e5b9a28',
    transform: body => {
        return cheerio.load(body);
    }
};
setInterval(() => {
    request(opts).then($ => {
        console.log('success...')
    }); 
}, 500);

