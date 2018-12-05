#!/usr/bin/node 

const http=require('http'),
      url=require('url'),
      qs=require('querystring');

var addr="http://wangding:123@www.baidu.com:8080/a/b/c?name=wangding&gender=M#/d/e/f";

console.log('url:',addr);
console.log('portocal:',url.parse(addr).protocol);
console.log('auth:',url.parse(addr).auth);

http.createServer((req,res)=>{
  console.log('url:',req.url);
  console.log('pathname:',url.parse(req.url).pathname);
  console.log('queryString:',url.parse(req.url).query);
  console.log('qs parse:',qs.parse(url.parse(req.url).query));

  res.end('OK!');
}).listen(8080);
