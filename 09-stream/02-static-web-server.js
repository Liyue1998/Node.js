#!/usr/bin/node 

const http=require('http'),
      path=require('path'),
      fs=require('fs');

var file;

http.createServer((req,res)=>{
  console.log(req.url);
  file=path.join(__dirname,req.url);
  //res.end(fs.readFileSync(file).toString('utf8'));

  fs.createReadStream(file).pipe(res);
}).listen(8080);

