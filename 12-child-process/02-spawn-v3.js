#!/usr/bin/node 
//外部服务版本
const http=require('http'),
      cp=require('child_process');

http.createServer((res,req)=>{
  var cmd=cp.spawn('./02-child.js');
  
  cmd.stdout.pipe(res);
}).listen(8080);
