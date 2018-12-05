#!/usr/bin/node 

const http=require('http');

http.createServer((req,res)=>{
  if(req.url==='/'){
    var html=''
  +  '<!DOCTYPE html>' 
  +  '<html>' 
  +  '<head>'
  +  '<meta charset='UTF-8'/>' 
  +  '<title>ly</title>' 
  +  '</head>' 
  +  '<body>' 
  +  '<h1>HELLO WORLD!</h1>' 
  +  '</body>' 
  +  '</html>' 

 // res.statusCode=200;
 // res.setHeader(Content-Type','text/html);
  res.writeHead(200,{
    'Content-Type':'text/html',
    'Content-Length':Buffer.byteLength(html)
  });
  res.end(html);
  }else{
    res.statusCode=404;
  
    res.end('Resourse Not Found');
  }
}).listen(8080);
